/* eslint-disable */
import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
  Box,
  Button,
  Typography,
  IconButton,
  Tooltip,
  Divider,
  Modal,
  TextField,
  CircularProgress as Loading,
} from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';
import { FormikHelpers, useFormik } from 'formik';
import { EmployeesConsumer } from './Context';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import List from './List';
import { EmployeesDto } from 'models/employees.dto';
import { Hooks } from 'services/employees/hooks';
const { useEmployees, useCreateEmployees } = Hooks;
import { validations } from './validations';
import CurrencyFormat from 'utils/moneFormat';

const Employees = () => {
  const consumer = EmployeesConsumer();
  const [employees, setEmployes] = useState<EmployeesDto[]>([]);
  const [open, setOpen] = useState(false);
  const [isCreated, setCreated] = useState<boolean>(false);
  const history = useHistory();
  const getEmployees = useEmployees();
  const createEmployees = useCreateEmployees();
  const { enqueueSnackbar } = useSnackbar();

  const handleCreateEmployees = (
    values: {
      name: string;
      position: string;
      salary: number;
      departament: string;
    },
    formikHelpers: FormikHelpers<{
      name: string;
      position: string;
      salary: number;
      departament: string;
    }>,
  ) => {
    setCreated(true);
    createEmployees({
      name: values.name,
      Position: values.position,
      department: values.departament,
      salary: Number(values.salary),
    })
      .then(async (response) => {
        console.log(response);
        setCreated(false);
        enqueueSnackbar('Empleado creado con exito', { variant: 'success' });
        const resp = await getEmployeesAll();
        setEmployes(resp);
        setTimeout(() => setOpen(false), 1000);
        formik.resetForm();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      position: '',
      salary: 0,
      departament: '',
    },
    onSubmit: handleCreateEmployees,
    validationSchema: validations,
  });
  const handleAdd = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setCreated(false);
  };
  const getEmployeesAll = async () => {
    return await (
      await getEmployees
    ).data;
  };
  useLayoutEffect(() => {
    const asyncFunction = async () => {
      const response = await getEmployeesAll();
      return response;
    };
    asyncFunction().then((r) => {
      consumer.setEmployees(r);
      setEmployes(r);
    });
  }, [open, isCreated]);
  return (
    <Box marginLeft={6}>
      <Box
        padding={1}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        flexWrap="nowrap"
      >
        <Modal
          style={{ zIndex: 99 }}
          BackdropProps={{}}
          open={open}
          onClose={() => {
            setOpen(false);
            setCreated(false);
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <Box
              padding={3}
              bgcolor="#FFF"
              width="28rem"
              marginTop={15}
              marginRight="auto"
              marginLeft="auto"
            >
              <Box>
                <Typography variant="h4">Agregar empleado</Typography>
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
                gridGap={30}
                marginTop={2}
              >
                <TextField
                  fullWidth
                  value={formik.values.name}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  onChange={formik.handleChange}
                  name="name"
                  variant="filled"
                  label="Nombre del empleado"
                />
                <TextField
                  fullWidth
                  value={formik.values.position}
                  name="position"
                  error={formik.touched.position && Boolean(formik.errors.position)}
                  helperText={formik.touched.name && formik.errors.position}
                  onChange={formik.handleChange}
                  variant="filled"
                  label="Posicion"
                />
                <TextField
                  fullWidth
                  error={formik.touched.departament && Boolean(formik.errors.departament)}
                  helperText={formik.touched.departament && formik.errors.departament}
                  value={formik.values.departament}
                  name="departament"
                  onChange={formik.handleChange}
                  variant="filled"
                  label="Departamento"
                />
                <TextField
                  fullWidth
                  name="salary"
                  type="number"
                  error={formik.touched.salary && Boolean(formik.errors.salary)}
                  helperText={formik.touched.salary && formik.errors.salary}
                  value={formik.values.salary}
                  onChange={formik.handleChange}
                  variant="filled"
                  label="Salario"
                />
                <Box width="100%" display="flex" justifyContent="space-between">
                  <Button type="submit" variant="contained" color="primary">
                    {isCreated ? (
                      <Box>
                        <Loading color="inherit" />
                      </Box>
                    ) : (
                      <Box>Agregar</Box>
                    )}
                  </Button>
                  <Button variant="contained" onClick={handleClose} color="secondary">
                    Cancelar
                  </Button>
                </Box>
              </Box>
            </Box>
          </form>
        </Modal>
        <Box flexGrow={2} display="flex" justifyContent="space-between">
          <Box paddingTop={2}>
            <Typography style={{ color: '#1F3C73' }} variant="h4">
              Empleados
            </Typography>
          </Box>
          <Box
            display="flex"
            marginTop={1}
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            marginBottom={2}
          >
            <Box display="flex" flexDirection="row" flexWrap="nowrap">
              <Box display="flex" gridGap={10}>
                <IconButton onClick={handleAdd} style={{ backgroundColor: '#fff' }} size="medium">
                  <Tooltip title="Agregar">
                    <AddBoxOutlinedIcon color="primary" fontSize="large" />
                  </Tooltip>
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box>
          {consumer.employees.length > 0 ? (
            <List _employees={consumer.employees} />
          ) : (
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography variant="h3">No hay datos</Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Employees;
