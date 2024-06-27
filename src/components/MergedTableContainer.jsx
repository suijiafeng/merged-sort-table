import React from 'react';
import TableComponent from './TableComponent';

const nestedSort = (data, sortKey, sortOrder) => {
  if (!sortKey) return data;

  // 分组保持原有顺序，且只对当前分组内的排序列进行排序
  const groupedData = data.reduce((acc, item) => {
    const groupKey = `${item.category}-${item.subCategory}`;
    if (!acc[groupKey]) acc[groupKey] = [];
    acc[groupKey].push(item);
    return acc;
  }, {});

  Object.keys(groupedData).forEach(groupKey => {
    groupedData[groupKey].sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  });

  return Object.values(groupedData).flat();
};

const processTableData = (data, columns, sortConfig) => {
  let processedData = [...data];

  if (sortConfig.key && sortConfig.key !== 'category' && sortConfig.key !== 'subCategory') {
    processedData = nestedSort(processedData, sortConfig.key, sortConfig.order);
  }

  const finalData = [];
  let currentCategory = '';
  let currentSubCategory = '';
  let categoryRowSpanCount = 0;
  let subCategoryRowSpanCount = 0;

  processedData.forEach((item, index) => {
    const newItem = { ...item };

    if (item.category !== currentCategory) {
      if (categoryRowSpanCount > 0) {
        finalData[finalData.length - categoryRowSpanCount].categoryRowSpan = categoryRowSpanCount;
      }
      currentCategory = item.category;
      categoryRowSpanCount = 1;
    } else {
      categoryRowSpanCount++;
    }

    if (item.subCategory !== currentSubCategory) {
      if (subCategoryRowSpanCount > 0) {
        finalData[finalData.length - subCategoryRowSpanCount].subCategoryRowSpan = subCategoryRowSpanCount;
      }
      currentSubCategory = item.subCategory;
      subCategoryRowSpanCount = 1;
    } else {
      subCategoryRowSpanCount++;
    }

    newItem.categoryRowSpan = 0;
    newItem.subCategoryRowSpan = 0;

    finalData.push(newItem);
  });

  if (categoryRowSpanCount > 0) {
    finalData[finalData.length - categoryRowSpanCount].categoryRowSpan = categoryRowSpanCount;
  }
  if (subCategoryRowSpanCount > 0) {
    finalData[finalData.length - subCategoryRowSpanCount].subCategoryRowSpan = subCategoryRowSpanCount;
  }

  return finalData;
};

const MergedTableContainer = ({ columns, data, sortConfig, onSortChange }) => {
  const processedData = processTableData(data, columns, sortConfig);

  return (
    <TableComponent columns={columns} data={processedData} sortConfig={sortConfig} onSortChange={onSortChange} />
  );
};

export default MergedTableContainer;
