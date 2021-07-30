/* eslint-disable */
import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Checkbox,
  Typography,
  Tooltip,
  Grid,
} from '@material-ui/core';
import Loading from '@material-ui/core/CircularProgress';

import { departmentsDto } from 'models/departments.dto';
import { Delete } from '@material-ui/icons';

interface SegmentTableProps {
  _departaments: departmentsDto[];
}

const SegmentTable: React.FC<SegmentTableProps> = ({ _departaments }) => {
  const [_selectedIndex, setSelectedIndex] = useState<number>();

  useEffect(() => {}, []);

  return (
    <TableContainer component={Paper}>
      {_departaments.length > 0 ? (
        <Table width={1} size="medium" padding="default" aria-label="a dense table">
          <TableHead>
            <TableRow
              style={{
                backgroundColor: '#eee',
                marginBottom: 10,
                borderBottom: '1px solid #000',
              }}
            >
              <TableCell colSpan={1}>
                <Box fontWeight="bold">Nombre del empleado</Box>
              </TableCell>
              <TableCell align="left">
                <Box fontWeight="bold">Posicion</Box>
              </TableCell>
              <TableCell align="left">
                <Box fontWeight="bold">Departamento</Box>
              </TableCell>
              <TableCell align="right">
                <Box fontWeight="bold">Acciones</Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {_departaments
              .slice(0 * _departaments.length, 0 * _departaments.length + _departaments.length)
              .map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow color="primary" hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        // onClick={(event) => handleClickSelected(event, row, index)}
                        color="primary"
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </TableCell>
                    <TableCell component={'th' as any} scope="row">
                      {row.name}
                    </TableCell>

                    <TableCell align="left">{row.responsable}</TableCell>
                    <TableCell component={'th' as any} scope="row">
                      {row.ubication}
                    </TableCell>
                    <TableCell align="right">
                      <Tooltip title="Eliminar">
                        <Button style={{ zIndex: 3 }}>
                          <Delete />
                        </Button>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      ) : (
        <Grid container alignItems="center">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            width="100%"
            padding={4}
          >
            <Loading />
            <Box marginTop={2} fontSize={25}>
              Cargando lista de empleados
            </Box>
          </Box>
        </Grid>
      )}
    </TableContainer>
  );
};
export default SegmentTable;
