import React, {useState} from 'react';
import { Table, Button ,Pagination } from 'react-bootstrap';
import { Posteo } from '../types/Posteo';

interface DataTableProps {
  data: Posteo[];
  handleEdit: (item: Posteo) => void;
  userRole: string;
}

const DataTable: React.FC<DataTableProps> = ({ data, handleEdit, userRole }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calcular los índices de los elementos actuales a mostrar
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Manejadores de cambio de página
  const handleFirstPage = () => setCurrentPage(1);
  const handleLastPage = () => setCurrentPage(Math.ceil(data.length / itemsPerPage));
  const handlePreviousPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  const handleNextPage = () => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(data.length / itemsPerPage)));

  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Título</th>
          <th>Usuario ID</th>
          <th>Body</th>
          {userRole === 'admin' && <th>Acciones</th>}
        </tr>
      </thead>
      <tbody>
        {currentItems.map((item) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.userId}</td>
            <td>{item.body}</td>
            {userRole === 'admin' && (
              <td>
                <Button variant="outline-info btn-sm ms-1 rounded" onClick={() => handleEdit(item)}>Editar</Button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
    <div className="d-flex justify-content-center mt-3" >
    <Pagination>
        <Pagination.First onClick={handleFirstPage} />
        <Pagination.Prev onClick={handlePreviousPage} />
        <Pagination.Next onClick={handleNextPage} />
        <Pagination.Last onClick={handleLastPage} />
      </Pagination>
      </div>
      </>
  );
};

export default DataTable;
