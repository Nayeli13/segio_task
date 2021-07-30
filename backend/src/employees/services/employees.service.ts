import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmployeesDto } from '../dto/employees.dto';
import { employeesDocument } from '../schemas/employees.schema';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel('employees') private employeesModel: Model<employeesDocument>,
  ) {}

  async create(createEmployeesDto: EmployeesDto): Promise<employeesDocument> {
    const createdEmployees = new this.employeesModel(createEmployeesDto);
    return await createdEmployees.save();
  }

  async get(): Promise<employeesDocument[]> {
    return await this.employeesModel.find().exec();
  }

  async getById(employeesId: string): Promise<employeesDocument> {
    return await this.employeesModel.findById(employeesId).exec();
  }

  async update(
    employeesId: string,
    employeesDto: EmployeesDto,
  ): Promise<employeesDocument> {
    const employeesDocument = new this.employeesModel(employeesDto);
    return await this.employeesModel.findByIdAndUpdate(
      employeesId,
      employeesDocument,
      {
        new: true,
      },
    );
  }

  async delete(employeesId: string): Promise<employeesDocument> {
    return await this.employeesModel.findOneAndRemove({ id: employeesId });
  }
}
