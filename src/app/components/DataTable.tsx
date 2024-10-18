import React, { useState } from 'react';
import { Table, Button, Pagination, Container, Row, Col } from 'react-bootstrap';
import { Posteo } from '../types/Posteo';

interface DataTableProps {
  data: Posteo[];
  handleEdit: (item: Posteo) => void;
  handleCreate: () => void;
  userRole: string;
}

const DataTable: React.FC<DataTableProps> = ({ data, handleEdit,handleCreate, userRole }) => {
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
    <Container className="py-4" style={{border: '1px solid #dee2e6', padding: '20px', borderRadius: '10px', background: '#f8f9fa', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
      <Row>
        <Col>
          <Table striped bordered hover responsive="md" className="shadow-sm bg-white rounded-3 overflow-hidden">
            <thead className="bg-primary text-white">
              <tr className="align-middle">
                <th className="text-center">Título</th>
                <th className="text-center">UserID</th>
                <th className="text-center">Body</th>
                {userRole === 'admin' && <th className="text-center">Acciones</th>}
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
                   <div className="d-flex flex-wrap justify-content-between align-items-center">
                     <Button
                       variant="outline-info btn-sm mb-1 rounded flex-grow-1 "
                       onClick={() => handleEdit(item)}
                       style={{ flexBasis: '0', flexGrow: 1, maxWidth: '95%' }} 
                     >
                       Editar
                     </Button>
                     <Button
                       variant="outline-info btn-sm mb-1 rounded flex-grow-1 "
                       onClick={() => handleCreate()}
                       style={{ flexBasis: '0', flexGrow: 1, maxWidth: '95%' }} 
                     >
                       Crear
                     </Button>
                   </div>
                 </td>
                  )}
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-center mt-3">
            <Pagination>
              <Pagination.First onClick={handleFirstPage} />
              <Pagination.Prev onClick={handlePreviousPage} />
              <Pagination.Next onClick={handleNextPage} />
              <Pagination.Last onClick={handleLastPage} />
            </Pagination>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DataTable;
