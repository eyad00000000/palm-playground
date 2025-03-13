
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface GameCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const GameCard = ({ id, title, description, imageUrl, category }: GameCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link
      to={`/games/${id}`}
      className="group block overflow-hidden rounded-xl transition-all duration-300 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl h-64">
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70" />
        
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-white rounded-full">
            {category}
          </span>
        </div>
        
        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <h3 className="text-xl font-display mb-2 font-semibold">{title}</h3>
          <p className={`text-sm text-white/80 line-clamp-2 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-70'
          }`}>
            {description}
          </p>
        </div>
      </div>
      
      <div className={`glass-card mt-1 p-4 transform transition-all duration-300 ${
        isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
      }`}>
        <span className="text-sm font-medium text-primary">View Game</span>
      </div>
    </Link>
  );
};

export default GameCard;
