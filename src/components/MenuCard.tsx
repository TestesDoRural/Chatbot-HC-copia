// src/components/MenuCard.tsx
import { Link } from "react-router-dom";

interface MenuCardProps {
  img: string;
  texto: string;
  path?: string;
  className?: string;
  onClick?: () => void;
}

const MenuCard = ({ img, texto, path, onClick, className }: MenuCardProps) => {
  const cardClasses = `
    bg-white rounded-xl overflow-hidden 
    shadow hover:shadow-[0_8px_20px_-5px_rgba(59,130,246,0.25)] 
    hover:-translate-y-1 transition-all duration-300 
    flex flex-col items-center justify-around text-center
    aspect-square cursor-pointer border-blue-200 border-2
    p-2 sm:p-4 
    ${className || ''}
  `;

  const content = (
    <div className={cardClasses} onClick={onClick}>
      <div className="w-full h-2/3 flex items-center justify-center">
        <img 
          src={img} 
          alt={texto} 
          className="max-h-full max-w-full object-contain" 
        />
      </div>

      <p className="text-gray-800 font-bold text-base sm:text-lg md:text-xl">
        {texto}
      </p>

    </div>
  );

  if (path) {
    return (
      <Link to={path} className="block h-full w-full">
        {content}
      </Link>
    );
  }

  return content;
};

export default MenuCard;