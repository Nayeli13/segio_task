import React from 'react';
import Employees from './Employees';
import { EmployeesProvider } from './Context';
export default function Departamentos() {
  return (
    <EmployeesProvider>
      <Employees />;
    </EmployeesProvider>
  );
}
