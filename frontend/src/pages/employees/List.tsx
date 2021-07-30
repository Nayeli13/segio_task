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
  Modal,
} from '@material-ui/core';
import Loading from '@material-ui/core/CircularProgress';
import { useSnackbar } from 'notistack';
import { EmployeesDto } from 'models/employees.dto';
import { Hooks } from 'services/employees/hooks';
import { Delete } from '@material-ui/icons';
import { EmployeesConsumer } from './Context';
import CurrencyFormat from 'utils/moneFormat';

const { useDelete } = Hooks;

interface SegmentTableProps {
  _employees: EmployeesDto[];
}

const SegmentTable: React.FC<SegmentTableProps> = ({ _employees }) => {
  const consumer = EmployeesConsumer();
  const deleted = useDelete();
  const [_selectedIndex, setSelectedIndex] = useState<number>();
  const [id, setId] = useState<string>();
  const { enqueueSnackbar } = useSnackbar();
  const [empleados, setEmpleados] = useState<typeof _employees>([]);
  useEffect(() => {
    if (_employees.length > 0) {
      setEmpleados(_employees);
    }
  }, [empleados, _employees]);

  const handleDelete = async (id: string) => {
    const deleteEmpleado = empleados.filter((value) => value.id !== id);
    const response = await deleted(id);
    response.status === 200
      ? enqueueSnackbar('El empleado ha sido eliminado', { variant: 'success' })
      : enqueueSnackbar('Ha ocurrido un error al intentar elimanar un empleado', {
          variant: 'error',
        });
    consumer.setEmployees(deleteEmpleado);
    setEmpleados(deleteEmpleado);
  };
  return (
    <TableContainer component={Paper}>
      {empleados.length > 0 ? (
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
              <TableCell align="left">
                <Box fontWeight="bold">Salario</Box>
              </TableCell>
              <TableCell align="right">
                <Box fontWeight="bold">Acciones</Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {empleados
              .slice(0 * empleados.length, 0 * empleados.length + empleados.length)
              .map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow color="primary" hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell component={'th' as any} scope="row">
                      {row.name}
                    </TableCell>

                    <TableCell align="left">{row.Position}</TableCell>
                    <TableCell component={'th' as any} scope="row">
                      {row.department}
                    </TableCell>
                    <TableCell component={'th' as any} scope="row">
                      {CurrencyFormat(row.salary as number)}
                    </TableCell>
                    <TableCell align="right">
                      <Tooltip title="Eliminar">
                        <Button onClick={() => handleDelete(row.id!)} style={{ zIndex: 3 }}>
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
            <Box fontSize={25}>No hay data</Box>
          </Box>
        </Grid>
      )}
    </TableContainer>
  );
};
export default SegmentTable;
