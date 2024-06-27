import React, { useEffect, useState } from 'react';
import './SortableButton.css';

interface SortableButtonProps {
  columnKey: string;
  title: string;
  activeSortKey: string;
  onSortChange: (columnKey: string, order: 'asc' | 'desc' | 'default') => void;
}

const SortableButton: React.FC<SortableButtonProps> = ({ columnKey, title, activeSortKey, onSortChange }) => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'default'>('default');

  useEffect(() => {
    if (activeSortKey !== columnKey) {
      setSortOrder('default');
    }
  }, [activeSortKey, columnKey]);

  const handleClick = () => {
    const newOrder = sortOrder === 'default' ? 'asc' : sortOrder === 'asc' ? 'desc' : 'default';
    setSortOrder(newOrder);
    onSortChange(columnKey, newOrder);
  };

  return (
    <th onClick={handleClick} className={`sortable-button ${activeSortKey === columnKey ? 'active' : ''}`}>
      {title}
      <span className="sort-icons">
        <span className={`sort-icon ${sortOrder === 'asc' ? 'active' : ''}`}>&#9650;</span>
        <span className={`sort-icon ${sortOrder === 'desc' ? 'active' : ''}`}>&#9660;</span>
      </span>
    </th>
  );
};

export default SortableButton;
