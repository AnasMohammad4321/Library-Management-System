// src/components/GridView.js

import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const GridView = ({ books }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Author</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {books.map((books) => 
                        <TableRow key={books._id}>
                            <TableCell>{books.title}</TableCell>
                            <TableCell>{books.author}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default GridView;