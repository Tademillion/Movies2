import { FC } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ListItemProps {
  id: number;
  title: string;
  posterPath: string;
  type: 'movie' | 'tv' | 'person';
  onRemove: (id: number) => void;
}

const ListItem: FC<ListItemProps> = ({ id, title, posterPath, type, onRemove }) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
      <img
        src={`https://image.tmdb.org/t/p/w92${posterPath}`}
        alt={title}
        className="w-16 h-24 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h3 className="text-white font-medium">{title}</h3>
        <span className="text-sm text-white/60 capitalize">{type}</span>
      </div>
      <button
        onClick={() => onRemove(id)}
        className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors duration-300"
      >
        <XMarkIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ListItem; 