import React from 'react';

interface RowProps {
  id: number;
  title: string;
  userId: number;
  body: string;
  actions?: React.ReactNode; 
}

const TableRow: React.FC<RowProps> = ({ id, title, userId, body, actions }) => {
  return (
    <tr key={id}>
      <td>{title}</td>
      <td>{userId}</td>
      <td>{body}</td>
      {actions && ( 
        <td>{actions}</td>
      )}
    </tr>
  );
};

export default TableRow;