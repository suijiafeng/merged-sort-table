import React from 'react';
import SortableButton from './SortableButton';

const TableComponent = ({ columns, data, sortConfig, onSortChange }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          {columns.map((col) => (
            <SortableButton
              key={col.key}
              columnKey={col.key}
              title={col.title}
              sortable={col.sortable}
              sortConfig={sortConfig}
              onSortChange={onSortChange}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((col) => {
              if (col.key === 'category' && item.categoryRowSpan > 0) {
                return <td key={col.key} rowSpan={item.categoryRowSpan}>{item[col.key]}</td>;
              }
              if (col.key === 'subCategory' && item.subCategoryRowSpan > 0) {
                return <td key={col.key} rowSpan={item.subCategoryRowSpan}>{item[col.key]}</td>;
              }
              if (col.key !== 'category' && col.key !== 'subCategory') {
                return <td key={col.key}>{item[col.key]}</td>;
              }
              return null;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
