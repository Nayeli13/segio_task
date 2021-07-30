import { api } from '../axios';
import { JobPositionDto } from 'models/job-positions.dto';
import { AxiosResponse } from 'axios';

export namespace JobServices {
  export const FetchCreate = (data: JobPositionDto): Promise<AxiosResponse<typeof data>> =>
    api.post('job-positions/create', data);
  export const FetchGet = (data: JobPositionDto): Promise<AxiosResponse<typeof data[]>> =>
    api.get('job-positions/');
  export const FetchUpdate = (
    id: number,
    data: JobPositionDto,
  ): Promise<AxiosResponse<typeof data>> => api.put(`job-positions/update/${id}`, data);
  export const FetchDelete = (id: number): Promise<AxiosResponse<JobPositionDto>> =>
    api.delete(`job-positions/delete/${id}`);
}
