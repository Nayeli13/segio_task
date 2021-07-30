import { api } from '../axios';
import { EmployeesDto } from 'models/employees.dto';
import { AxiosResponse } from 'axios';

export namespace EmployessServices {
  export const FetchCreate = (data: EmployeesDto) => api.post('employees/create', data);
  export const FetchGet = () => api.get('http://localhost:4000/api/employees');
  export const FetchUpdate = (id: number, data: EmployeesDto) =>
    api.put(`employees/update/${id}`, data);
  export const FetchDelete = (id: string) => api.delete(`employees/delete/${id}`);
}
