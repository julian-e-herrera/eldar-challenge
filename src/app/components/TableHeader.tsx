import React from 'react';


export interface TableColumn {
  title: string;
  key?: string;
  className?: string;
}

interface TableHeaderProps {
  columns: TableColumn[];
  showActions?: boolean;
}

const TableHeader: React.FC<TableHeaderProps> = ({ columns, showActions }) => {
  return (
    <thead>
      <tr className="align-middle">
        {columns.map((column) => (
          <th key={column.key || column.title} className={`text-center ${column.className || ''}`}>
            {column.title}
          </th>
        ))}
        {showActions && (
          <th className="text-center">Acciones</th>
        )}
      </tr>
    </thead>
  );
};

export default TableHeader;