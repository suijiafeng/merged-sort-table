import React from 'react';

const SortableButton = ({ columnKey, title, sortable, sortConfig, onSortChange }) => {
  const handleClick = () => {
    if (sortable) {
      const newOrder = sortConfig.key === columnKey && sortConfig.order === 'asc' ? 'desc' : 'asc';
      onSortChange(columnKey, newOrder);
    }
  };

  return (
    <th onClick={handleClick} style={{ cursor: sortable ? 'pointer' : 'default' }}>
      {title} {sortable && sortConfig.key === columnKey ? (sortConfig.order === 'asc' ? '↑' : '↓') : ''}
    </th>
  );
};

export default SortableButton;
