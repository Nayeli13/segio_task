import { api } from '../axios';
import { departmentsDto } from 'models/departments.dto';
import { AxiosResponse } from 'axios';

export namespace DepartamentServices {
  export const FetchCreate = (data: departmentsDto): Promise<AxiosResponse<typeof data>> =>
    api.post('departements/create', data);
  export const FetchGet = (data: departmentsDto): Promise<AxiosResponse<typeof data[]>> =>
    api.get('departements/');
  export const FetchUpdate = (
    id: number,
    data: departmentsDto,
  ): Promise<AxiosResponse<typeof data>> => api.put(`departements/create/${id}`, data);
  export const FetchDelete = (id: number): Promise<AxiosResponse<departmentsDto>> =>
    api.delete(`departements/delete/${id}`);
}
