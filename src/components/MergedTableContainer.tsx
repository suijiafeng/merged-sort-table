import React, { useState } from 'react';
import TableComponent from './TableComponent';

interface MergedTableContainerProps {
  columns: Column[];
  data: TableRow[];
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

const MergedTableContainer: React.FC<MergedTableContainerProps> = ({ columns, data }) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: '', order: 'default' });

  const handleSortChange = (columnKey: string, order: 'asc' | 'desc' | 'default') => {
    setSortConfig({ key: columnKey, order });
  };
  const nestedSort = (data: TableRow[], sortKey: string, sortOrder: 'asc' | 'desc' | 'default'): TableRow[] => {
    if (sortOrder === 'default') return data;
  
    return data.sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  };
  
  const groupAndSort = (data: TableRow[], sortConfig: { key: string; order: 'asc' | 'desc' | 'default' }): TableRow[] => {
    const groupedData: { [key: string]: TableRow[] } = {};
  
    // Group data
    for (const item of data) {
      const groupKey = `${item.category}-${item.subCategory}`;
      if (!groupedData[groupKey]) {
        groupedData[groupKey] = [];
      }
      groupedData[groupKey].push(item);
    }
  
    // Sort each group
    const sortedGroups = Object.values(groupedData).map(group => {
      if (sortConfig.key !== 'category' && sortConfig.key !== 'subCategory') {
        return nestedSort(group, sortConfig.key, sortConfig.order);
      }
      return group;
    });
  
    // Flatten sorted groups back into a single array
    return sortedGroups.flat();
  };
  const mergeCells = (data: TableRow[]): TableRow[] => {
    const finalData: TableRow[] = [];
    const categoryMap: { [key: string]: TableRow & { categoryRowSpan: number } } = {};
    const subCategoryMap: { [key: string]: TableRow & { subCategoryRowSpan: number } } = {};
  
    data.forEach(item => {
      const categoryKey = item.category;
      const subCategoryKey = `${item.category}-${item.subCategory}`;
  
      if (!categoryMap[categoryKey]) {
        categoryMap[categoryKey] = { ...item, categoryRowSpan: 0 };
      }
      categoryMap[categoryKey].categoryRowSpan += 1;
  
      if (!subCategoryMap[subCategoryKey]) {
        subCategoryMap[subCategoryKey] = { ...item, subCategoryRowSpan: 0 };
      }
      subCategoryMap[subCategoryKey].subCategoryRowSpan += 1;
  
      finalData.push({ ...item, categoryRowSpan: 0, subCategoryRowSpan: 0 });
    });
  
    finalData.forEach((item, index) => {
      const categoryKey = item.category;
      const subCategoryKey = `${item.category}-${item.subCategory}`;
  
      if (categoryMap[categoryKey].categoryRowSpan > 0) {
        finalData[index].categoryRowSpan = categoryMap[categoryKey].categoryRowSpan;
        categoryMap[categoryKey].categoryRowSpan = 0;
      }
  
      if (subCategoryMap[subCategoryKey].subCategoryRowSpan > 0) {
        finalData[index].subCategoryRowSpan = subCategoryMap[subCategoryKey].subCategoryRowSpan;
        subCategoryMap[subCategoryKey].subCategoryRowSpan = 0;
      }
    });
  
    return finalData;
  };
  const sortedData = groupAndSort(data, sortConfig);
  const processedData = mergeCells(sortedData);

  return <TableComponent columns={columns} data={processedData} sortConfig={sortConfig} onSortChange={handleSortChange} />;
};

export default MergedTableContainer;
