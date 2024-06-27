import React from 'react';
import SortableButton from './SortableButton';

interface TableComponentProps {
  columns: Column[];
  data: TableRow[];
  sortConfig: SortConfig;
  onSortChange: (columnKey: string, order: 'asc' | 'desc' | 'default') => void;
}

interface Column {
  key: string;
  title: string;
}

interface TableRow {
  [key: string]: any;
  categoryRowSpan?: number;
  subCategoryRowSpan?: number;
}

interface SortConfig {
  key: string;
  order: 'asc' | 'desc' | 'default';
}

const TableComponent: React.FC<TableComponentProps> = ({ columns, data, sortConfig, onSortChange }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          {columns.map((col) => (
            <SortableButton
              key={col.key}
              columnKey={col.key}
              title={col.title}
              activeSortKey={sortConfig.key}
              onSortChange={onSortChange}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((col) => {
              if (col.key === 'category' && item.categoryRowSpan && item.categoryRowSpan > 0) {
                return <td key={col.key} rowSpan={item.categoryRowSpan}>{item[col.key]}</td>;
              }
              if (col.key === 'subCategory' && item.subCategoryRowSpan && item.subCategoryRowSpan > 0) {
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
