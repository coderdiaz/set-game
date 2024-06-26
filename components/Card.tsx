import cn from "clsx";
import React from "react";

interface ICardProps {
  config: number[];
  selected?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const createImages = (config: number[]) => {
  const [shape, color, n, shading] = config;
  const shapes = [];

  for (let i = 0; i < n; i++) {
    shapes.push(<img loading="lazy" key={i} alt="shape" src={`/assets/svg/${[shape, shading, color].toString()}.svg`} />);
  }

  return shapes;
};

const Card = ({ selected = false, config, onClick }: ICardProps) => {
  const className = cn("py-10 px-6 bg-gray-200 rounded flex space-x-4 justify-center items-center", {
    ring: selected,
    "ring-offset-gray-800": selected,
    "ring-yellow-300": selected,
    "ring-offset-2": selected,
  });

  return (
    <button onClick={onClick} className={className}>
      {createImages(config)}
    </button>
  );
};

export default Card;
