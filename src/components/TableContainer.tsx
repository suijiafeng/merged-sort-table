import React, { useEffect, useState } from 'react';
import MergedTableContainer from './MergedTableContainer';

interface Column {
  key: string;
  title: string;
}

interface TableRow {
  [key: string]: any;
}

const TableContainer: React.FC = () => {
  const [columns, setColumns] = useState<Column[]>([]);
  const [data, setData] = useState<TableRow[]>([]);

  useEffect(() => {
    const columnsData: Column[] = [
      { key: 'category', title: 'Category' },
      { key: 'subCategory', title: 'SubCategory' },
      { key: 'name', title: 'Name' },
      { key: 'value1', title: 'Value 1' },
      { key: 'value2', title: 'Value 2' },
      { key: 'value3', title: 'Value 3' },
      { key: 'value4', title: 'Value 4' },
      { key: 'value5', title: 'Value 5' },
      { key: 'value6', title: 'Value 6' },
      { key: 'value7', title: 'Value 7' }
    ];

    const tableData: TableRow[] = [
      { id: 1, category: 'A', subCategory: 'A1', name: 'Item 1', value1: 102, value2: 230, value3: 310, value4: 40, value5: 50, value6: 60, value7: 70 },
      { id: 2, category: 'A', subCategory: 'A1', name: 'Item 2', value1: 101, value2: 251, value3: 321, value4: 41, value5: 51, value6: 61, value7: 71 },
      { id: 3, category: 'A', subCategory: 'A2', name: 'Item 3', value1: 120, value2: 122, value3: 321, value4: 42, value5: 52, value6: 62, value7: 72 },
      { id: 4, category: 'A', subCategory: 'A2', name: 'Item 4', value1: 113, value2: 223, value3: 313, value4: 43, value5: 53, value6: 63, value7: 73 },
      { id: 5, category: 'B', subCategory: 'B1', name: 'Item 5', value1: 124, value2: 24, value3: 341, value4: 44, value5: 54, value6: 64, value7: 74 },
      { id: 6, category: 'B', subCategory: 'B1', name: 'Item 6', value1: 115, value2: 235, value3: 135, value4: 45, value5: 55, value6: 65, value7: 75 },
      { id: 7, category: 'B', subCategory: 'B2', name: 'Item 7', value1: 136, value2: 26, value3: 136, value4: 46, value5: 56, value6: 66, value7: 76 },
      { id: 8, category: 'B', subCategory: 'B2', name: 'Item 8', value1: 107, value2: 217, value3: 137, value4: 47, value5: 57, value6: 67, value7: 77 },
      { id: 9, category: 'C', subCategory: 'C1', name: 'Item 9', value1: 118, value2: 28, value3: 328, value4: 48, value5: 58, value6: 68, value7: 78 },
      { id: 10, category: 'C', subCategory: 'C1', name: 'Item 10', value1: 19, value2: 29, value3: 329, value4: 49, value5: 59, value6: 69, value7: 79 },
      { id: 11, category: 'C', subCategory: 'C2', name: 'Item 11', value1: 120, value2: 130, value3: 340, value4: 50, value5: 60, value6: 70, value7: 80 },
      { id: 12, category: 'C', subCategory: 'C2', name: 'Item 12', value1: 211, value2: 131, value3: 421, value4: 51, value5: 61, value6: 71, value7: 81 },
      { id: 13, category: 'D', subCategory: 'D1', name: 'Item 13', value1: 22, value2: 321, value3: 422, value4: 52, value5: 62, value6: 72, value7: 82 },
      { id: 14, category: 'D', subCategory: 'D1', name: 'Item 14', value1: 213, value2: 313, value3: 243, value4: 53, value5: 63, value6: 73, value7: 83 },
      { id: 15, category: 'D', subCategory: 'D2', name: 'Item 15', value1: 24, value2: 341, value3: 442, value4: 54, value5: 64, value6: 74, value7: 84 },
      { id: 16, category: 'D', subCategory: 'D2', name: 'Item 16', value1: 225, value2: 351, value3: 425, value4: 55, value5: 65, value6: 75, value7: 85 },
      { id: 17, category: 'E', subCategory: 'E1', name: 'Item 17', value1: 246, value2: 361, value3: 246, value4: 56, value5: 66, value6: 76, value7: 86 },
      { id: 18, category: 'E', subCategory: 'E1', name: 'Item 18', value1: 257, value2: 137, value3: 427, value4: 57, value5: 67, value6: 77, value7: 87 },
      { id: 19, category: 'E', subCategory: 'E7', name: 'Item 19', value1: 28, value2: 318, value3: 428, value4: 58, value5: 68, value6: 78, value7: 88 },
      { id: 20, category: 'E', subCategory: 'E8', name: 'Item 20', value1: 129, value2: 319, value3: 492, value4: 59, value5: 69, value6: 79, value7: 89 }
    ];

    setColumns(columnsData);
    setData(tableData);
  }, []);

  return <MergedTableContainer columns={columns} data={data} />;
};

export default TableContainer;
