import { FC, useState } from "react";
import {
  PlusIcon,
  FilmIcon,
  TvIcon,
  UserGroupIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

interface List {
  id: string;
  name: string;
  type: "movies" | "tv" | "people";
  itemCount: number;
  lastUpdated: string;
}

const ListsPage: FC = () => {
  const [lists, setLists] = useState<List[]>([
    {
      id: "1",
      name: "My Favorite Movies",
      type: "movies",
      itemCount: 12,
      lastUpdated: "2024-03-15",
    },
    {
      id: "2",
      name: "TV Shows to Watch",
      type: "tv",
      itemCount: 8,
      lastUpdated: "2024-03-14",
    },
    {
      id: "3",
      name: "Favorite Actors",
      type: "people",
      itemCount: 15,
      lastUpdated: "2024-03-13",
    },
  ]);

  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [newListName, setNewListName] = useState("");
  const [newListType, setNewListType] = useState<"movies" | "tv" | "people">(
    "movies"
  );
  const [newItemCount, setNewItemCount] = useState<number>(0);
  const [editListName, setEditListName] = useState("");
  const [editListType, setEditListType] = useState<"movies" | "tv" | "people">(
    "movies"
  );
  const [editItemCount, setEditItemCount] = useState<number>(0);

  const handleCreateList = () => {
    const newList: List = {
      id: Date.now().toString(),
      name: newListName,
      type: newListType,
      itemCount: newItemCount,
      lastUpdated: new Date().toISOString().split("T")[0],
    };

    setLists([...lists, newList]);
    setIsCreating(false);
    setNewListName("");
    setNewItemCount(0);
  };

  const handleDeleteList = (id: string) => {
    setLists(lists.filter((list) => list.id !== id));
  };

  const handleStartEdit = (list: List) => {
    setIsEditing(list.id);
    setEditListName(list.name);
    setEditListType(list.type);
    setEditItemCount(list.itemCount);
  };

  const handleSaveEdit = (id: string) => {
    setLists(
      lists.map((list) =>
        list.id === id
          ? {
              ...list,
              name: editListName,
              type: editListType,
              itemCount: editItemCount,
            }
          : list
      )
    );
    setIsEditing(null);
    setEditListName("");
    setEditItemCount(0);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "movies":
        return <FilmIcon className="w-6 h-6 text-blue-400" />;
      case "tv":
        return <TvIcon className="w-6 h-6 text-purple-400" />;
      case "people":
        return <UserGroupIcon className="w-6 h-6 text-green-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-white">My Lists</h1>
        <button
          onClick={() => setIsCreating(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
        >
          <PlusIcon className="w-5 h-5 text-white" />
          <span>Create New List</span>
        </button>
      </div>

      {isCreating && (
        <div className="mb-8 p-6 bg-white/5 rounded-xl">
          <h2 className="text-xl font-semibold text-white mb-4">
            Create New List
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="List Name"
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
              className="w-full bg-white/10 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={newListType}
              onChange={(e) =>
                setNewListType(e.target.value as "movies" | "tv" | "people")
              }
              className="w-full bg-white/10 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="movies" className="bg-gray-800 text-white">
                Movies
              </option>
              <option value="tv" className="bg-gray-800 text-white">
                TV Shows
              </option>
              <option value="people" className="bg-gray-800 text-white">
                People
              </option>
            </select>
            <input
              type="number"
              placeholder="Number of Items"
              value={newItemCount}
              onChange={(e) => setNewItemCount(Number(e.target.value))}
              min="0"
              className="w-full bg-white/10 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsCreating(false)}
                className="px-4 py-2 text-white/60 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateList}
                disabled={!newListName}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lists.map((list) => (
          <div
            key={list.id}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-white/20 rounded-lg shadow-lg">
                {getIcon(list.type)}
              </div>
              {isEditing === list.id ? (
                <div className="flex-1 space-y-2">
                  <input
                    type="text"
                    value={editListName}
                    onChange={(e) => setEditListName(e.target.value)}
                    className="w-full bg-white/10 text-white px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <select
                    value={editListType}
                    onChange={(e) =>
                      setEditListType(
                        e.target.value as "movies" | "tv" | "people"
                      )
                    }
                    className="w-full bg-white/10 text-white px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="movies" className="bg-gray-800 text-white">
                      Movies
                    </option>
                    <option value="tv" className="bg-gray-800 text-white">
                      TV Shows
                    </option>
                    <option value="people" className="bg-gray-800 text-white">
                      People
                    </option>
                  </select>
                  <input
                    type="number"
                    value={editItemCount}
                    onChange={(e) => setEditItemCount(Number(e.target.value))}
                    min="0"
                    className="w-full bg-white/10 text-white px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="flex justify-end space-x-2">
                    <button
                      onClick={() => handleSaveEdit(list.id)}
                      className="px-2 py-1 text-green-400 hover:text-green-300"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setIsEditing(null)}
                      className="px-2 py-1 text-red-400 hover:text-red-300"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-white">
                      {list.name}
                    </h2>
                    <div className=" text-sm text-white/90 ">
                      <span>{list.itemCount} items</span>
                      <br />
                      <span>
                        last Updated{" "}
                        {new Date(list.lastUpdated).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleStartEdit(list)}
                      className="p-1 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors duration-300"
                    >
                      <PencilIcon className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteList(list.id)}
                      className="p-1 text-red-500 hover:text-red-400 hover:bg-white/10 rounded-full transition-colors duration-300"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListsPage;
