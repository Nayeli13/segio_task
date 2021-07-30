import { api } from '../axios';
import { incomeTypesDto } from 'models/income-types.dto';
import { AxiosResponse } from 'axios';

export namespace IcometServices {
  export const FetchCreate = (data: incomeTypesDto): Promise<AxiosResponse<typeof data>> =>
    api.post('income-types/create', data);
  export const FetchGet = (data: incomeTypesDto): Promise<AxiosResponse<typeof data[]>> =>
    api.get('income-types/');
  export const FetchUpdate = (
    id: number,
    data: incomeTypesDto,
  ): Promise<AxiosResponse<typeof data>> => api.put(`income-types/update/${id}`, data);
  export const FetchDelete = (id: number): Promise<AxiosResponse<incomeTypesDto>> =>
    api.delete(`income-types/delete/${id}`);
}
