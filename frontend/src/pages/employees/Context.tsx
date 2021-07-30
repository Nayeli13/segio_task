import React, {
  useContext,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';
import { EmployeesDto } from 'models/employees.dto';

interface EmployeesContext {
  employees: EmployeesDto[];
  setEmployees: Dispatch<SetStateAction<EmployeesDto[]>>;
}

const EmployeesContext = createContext<null | EmployeesContext>(null);

export function EmployeesProvider({ children }: { children: ReactNode }) {
  const [employees, setEmployees] = useState<EmployeesDto[]>([]);
  const value = { employees, setEmployees };
  return <EmployeesContext.Provider value={value}>{children}</EmployeesContext.Provider>;
}

export function EmployeesConsumer() {
  const consumer = useContext(EmployeesContext);

  if (consumer === null) {
    throw new Error('Employees context is undefined or null');
  }
  return consumer;
}
