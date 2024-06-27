import React, { useEffect, useState } from 'react';
import MergedTableContainer from './MergedTableContainer';

const TableContainer = () => {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, order: 'asc' });

  useEffect(() => {
    // 使用假数据代替 API 请求
    const columnsData = [
      { key: 'category', title: 'Category', sortable: false },
      { key: 'subCategory', title: 'SubCategory', sortable: false },
      { key: 'name', title: 'Name', sortable: true },
      { key: 'value1', title: 'Value 1', sortable: true },
      { key: 'value2', title: 'Value 2', sortable: true },
      { key: 'value3', title: 'Value 3', sortable: true },
      { key: 'value4', title: 'Value 4', sortable: true },
      { key: 'value5', title: 'Value 5', sortable: true },
      { key: 'value6', title: 'Value 6', sortable: true },
      { key: 'value7', title: 'Value 7', sortable: true }
    ];
    const tableData = [
      { id: 1, category: 'A', subCategory: 'A1', name: 'Item 1', value1: 10, value2: 20, value3: 30, value4: 40, value5: 50, value6: 60, value7: 70 },
      { id: 2, category: 'A', subCategory: 'A1', name: 'Item 2', value1: 11, value2: 21, value3: 31, value4: 41, value5: 51, value6: 61, value7: 71 },
      { id: 3, category: 'A', subCategory: 'A2', name: 'Item 3', value1: 12, value2: 22, value3: 32, value4: 42, value5: 52, value6: 62, value7: 72 },
      { id: 4, category: 'A', subCategory: 'A2', name: 'Item 4', value1: 13, value2: 23, value3: 33, value4: 43, value5: 53, value6: 63, value7: 73 },
      { id: 5, category: 'B', subCategory: 'B1', name: 'Item 5', value1: 14, value2: 24, value3: 34, value4: 44, value5: 54, value6: 64, value7: 74 },
      { id: 6, category: 'B', subCategory: 'B1', name: 'Item 6', value1: 15, value2: 25, value3: 35, value4: 45, value5: 55, value6: 65, value7: 75 },
      { id: 7, category: 'B', subCategory: 'B2', name: 'Item 7', value1: 16, value2: 26, value3: 36, value4: 46, value5: 56, value6: 66, value7: 76 },
      { id: 8, category: 'B', subCategory: 'B2', name: 'Item 8', value1: 17, value2: 27, value3: 37, value4: 47, value5: 57, value6: 67, value7: 77 },
      { id: 9, category: 'C', subCategory: 'C1', name: 'Item 9', value1: 18, value2: 28, value3: 38, value4: 48, value5: 58, value6: 68, value7: 78 },
      { id: 10, category: 'C', subCategory: 'C1', name: 'Item 10', value1: 19, value2: 29, value3: 39, value4: 49, value5: 59, value6: 69, value7: 79 },
      { id: 11, category: 'C', subCategory: 'C2', name: 'Item 11', value1: 20, value2: 30, value3: 40, value4: 50, value5: 60, value6: 70, value7: 80 },
      { id: 12, category: 'C', subCategory: 'C2', name: 'Item 12', value1: 21, value2: 31, value3: 41, value4: 51, value5: 61, value6: 71, value7: 81 },
      { id: 13, category: 'D', subCategory: 'D1', name: 'Item 13', value1: 22, value2: 32, value3: 42, value4: 52, value5: 62, value6: 72, value7: 82 },
      { id: 14, category: 'D', subCategory: 'D1', name: 'Item 14', value1: 23, value2: 33, value3: 43, value4: 53, value5: 63, value6: 73, value7: 83 },
      { id: 15, category: 'D', subCategory: 'D2', name: 'Item 15', value1: 24, value2: 34, value3: 44, value4: 54, value5: 64, value6: 74, value7: 84 },
      { id: 16, category: 'D', subCategory: 'D2', name: 'Item 16', value1: 25, value2: 35, value3: 45, value4: 55, value5: 65, value6: 75, value7: 85 },
      { id: 17, category: 'E', subCategory: 'E1', name: 'Item 17', value1: 26, value2: 36, value3: 46, value4: 56, value5: 66, value6: 76, value7: 86 },
      { id: 18, category: 'E', subCategory: 'E1', name: 'Item 18', value1: 27, value2: 37, value3: 47, value4: 57, value5: 67, value6: 77, value7: 87 },
      { id: 19, category: 'A', subCategory: 'A1', name: 'Item 19', value1: 28, value2: 38, value3: 48, value4: 58, value5: 68, value6: 78, value7: 88 },
      { id: 20, category: 'A', subCategory: 'A1', name: 'Item 20', value1: 29, value2: 39, value3: 49, value4: 59, value5: 69, value6: 79, value7: 89 },
      { id: 21, category: 'E', subCategory: 'E7', name: 'Item 21', value1: 30, value2: 40, value3: 50, value4: 60, value5: 70, value6: 80, value7: 90 },
      { id: 22, category: 'E', subCategory: 'E8', name: 'Item 22', value1: 31, value2: 41, value3: 51, value4: 61, value5: 71, value6: 81, value7: 91 },
      { id: 23, category: 'E', subCategory: 'E9', name: 'Item 23', value1: 32, value2: 42, value3: 52, value4: 62, value5: 72, value6: 82, value7: 92 },
      { id: 24, category: 'E', subCategory: 'E10', name: 'Item 24', value1: 33, value2: 43, value3: 53, value4: 63, value5: 73, value6: 83, value7: 93 },
    ];

    setColumns(columnsData);
    setData(tableData);
  }, []);

  const handleSortChange = (key, order) => {
    let parentKey = null;
    switch (key) {
      case 'value1':
      case 'value2':
      case 'value3':
      case 'value4':
      case 'value5':
      case 'value6':
      case 'value7':
        parentKey = 'subCategory';
        break;
      case 'name':
        parentKey = 'category';
        break;
      default:
        parentKey = null;
    }
    setSortConfig({ key, order, parentKey });
  };

  return (
    <MergedTableContainer columns={columns} data={data} sortConfig={sortConfig} onSortChange={handleSortChange} />
  );
};

export default TableContainer;
