
import React from 'react';

interface ListItemProps {
  text: string;
  className?: string;
}

const ListItem: React.FC<ListItemProps> = ({ text, className }) => {
  return (
    <li className={`mb-2 ${className}`}>
      {text}
    </li>
  );
};

export default ListItem;
