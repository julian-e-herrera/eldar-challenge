import React, { ReactNode, useState } from 'react';
import { Table, Container, Button, Pagination } from 'react-bootstrap';
import TableRow from './TableRow'; 
import TableHeader, { TableColumn } from './TableHeader';


interface TableProps {
    title: string;
    data: any[]; 
    columns: TableColumn[];
    userRole: string; 

    handleEdit?: (item: any) => void;
    handleCreate?: () => void;
    actions?: ReactNode
}

const TableContainer: React.FC<TableProps> = ({
    title,
    data,
    columns,
    userRole,

    handleEdit,
    handleCreate

}) => {


    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

 
    const handleFirstPage = () => setCurrentPage(1);
    const handleLastPage = () => setCurrentPage(Math.ceil(data.length / itemsPerPage));
    const handlePreviousPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));
    const handleNextPage = () => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(data.length / itemsPerPage)));



    return (
        <Container>
            <h2>{title}</h2>

            <Table striped bordered hover responsive="md" className="shadow-sm bg-white rounded-3 overflow-hidden">

                <TableHeader
                    columns={columns}
                    showActions={userRole === 'admin'}
                />
                <tbody>
                    {currentItems.map((item, i) => (
                        <TableRow
                            key={i}
                            title={item.title}
                            userId={item.userId}
                            body={item.body}
                            id={i}
                            actions={
                                userRole === 'admin' && (
                                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                                        <Button variant="outline-info btn-sm mb-1 rounded flex-grow-1 "
                                            style={{ flexBasis: '0', flexGrow: 1, maxWidth: '95%' }} onClick={() => handleEdit?.(item)}>
                                            Editar
                                        </Button>
                                        <Button variant="outline-info btn-sm mb-1 rounded flex-grow-1 "
                                            style={{ flexBasis: '0', flexGrow: 1, maxWidth: '95%' }} onClick={handleCreate}>
                                            Crear
                                        </Button>
                                    </div>
                                )
                            }
                        />
                    ))}
                </tbody>
            </Table>
            {handleFirstPage && (
                <div className="d-flex justify-content-center mt-3">
                    <Pagination>
                        <Pagination.First onClick={handleFirstPage} />
                        <Pagination.Prev onClick={handlePreviousPage} />

                        <Pagination.Next onClick={handleNextPage} />
                        <Pagination.Last onClick={handleLastPage} />
                    </Pagination>
                </div>
            )}
        </Container>
    );
};

export default TableContainer;