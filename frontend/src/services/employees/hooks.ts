import { EmployeesDto } from 'models/employees.dto';
import { EmployessServices } from './services';

const { FetchGet, FetchCreate, FetchDelete, FetchUpdate } = EmployessServices;

export namespace Hooks {
  export const useEmployees = async () => {
    return await FetchGet();
  };
  export const useCreateEmployees = () => {
    const create = async (data: EmployeesDto) => {
      const createdEmployees = await FetchCreate(data);
      return createdEmployees;
    };
    return create;
  };

  export const useDelete = () => {
    const deleted = async (id: string) => {
      return await FetchDelete(id);
    };
    return deleted;
  };
  export const useUpdareEmployees = () => {
    const updated = async (id: number, data: EmployeesDto) => {
      return await FetchUpdate(id, data);
    };
    return updated;
  };
}
