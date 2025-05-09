import { FC, useState } from 'react';
import { PencilIcon, TrashIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import ListItem from './ListItem';
import apiClient from '../../services/apiClient';

interface ListDetailsProps {
  list: {
    id: string;
    name: string;
    type: 'movies' | 'tv' | 'people';
    items: Array<{
      id: number;
      title: string;
      posterPath: string;
      type: 'movie' | 'tv' | 'person';
    }>;
  };
  onBack: () => void;
  onDelete: (id: string) => void;
}

const ListDetails: FC<ListDetailsProps> = ({ list, onBack, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [listName, setListName] = useState(list.name);

  const handleRemoveItem = async (itemId: number) => {
    try {
      await apiClient.delete(`/lists/${list.id}/items/${itemId}`);
      // Update the list items in the parent component
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  const handleSave = async () => {
    try {
      await apiClient.put(`/lists/${list.id}`, { name: listName });
      setIsEditing(false);
      // Update the list name in the parent component
    } catch (error) {
      console.error('Error updating list:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-4 mb-8">
        <button
          onClick={onBack}
          className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors duration-300"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        
        {isEditing ? (
          <div className="flex-1 flex items-center space-x-4">
            <input
              type="text"
              value={listName}
              onChange={(e) => setListName(e.target.value)}
              className="flex-1 bg-white/10 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
            >
              Save
            </button>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-between">
            <h1 className="text-4xl font-bold text-white">{list.name}</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsEditing(true)}
                className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors duration-300"
              >
                <PencilIcon className="w-5 h-5" />
              </button>
              <button
                onClick={() => onDelete(list.id)}
                className="p-2 text-red-500 hover:text-red-400 hover:bg-white/10 rounded-full transition-colors duration-300"
              >
                <TrashIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="grid gap-4">
        {list.items.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            title={item.title}
            posterPath={item.posterPath}
            type={item.type}
            onRemove={handleRemoveItem}
          />
        ))}
      </div>
    </div>
  );
};

export default ListDetails; 