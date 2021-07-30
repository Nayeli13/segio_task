import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { departmentsDto } from '../dto/departments.dto';
import { departmentDocument } from '../schemas/departments.schemas';

@Injectable()
export class DepartmentsService {
    constructor(
        @InjectModel('departments') private departmentModel: Model<departmentDocument>,
      ) {}
    
      async create(createDepartmentDto: departmentsDto): Promise<departmentDocument> {
        const createdDepartment = new this.departmentModel(createDepartmentDto);
        return await createdDepartment.save();
      }
    
      async get(): Promise<departmentDocument[]> {
        return await this.departmentModel.find().exec();
      }
    
      async getById(departmentId: string): Promise<departmentDocument> {
        return await this.departmentModel.findById(departmentId).exec();
      }
    
      async update(departmentId: string, departmentDto: departmentsDto): Promise<departmentDocument> {
        const departmentDocument = new this.departmentModel(departmentDto);
        return await this.departmentModel.findByIdAndUpdate(departmentId, departmentDocument, {
          new: true,
        });
      }

      async delete(departmentId: string): Promise<departmentDocument> {
        return await this.departmentModel.findByIdAndDelete(departmentId);
      }
}
