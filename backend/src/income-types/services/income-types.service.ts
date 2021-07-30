import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { incomeTypesDto } from '../dto/income-types.dto';
import { incomeTypesDocument } from '../schemas/income-types.schema';

@Injectable()
export class IncomeTypesService {
    constructor(
        @InjectModel('incomeTypes') private incomeTypesModel: Model<incomeTypesDocument>,
      ) {}
    
      async create(createdIncomeTypesDto: incomeTypesDto): Promise<incomeTypesDocument> {
        const createdIncomeTypes = new this.incomeTypesModel(createdIncomeTypesDto);
        return await createdIncomeTypes.save();
      }
    
      async get(): Promise<incomeTypesDocument[]> {
        return await this.incomeTypesModel.find().exec();
      }
    
      async getById(incomeTypesId: string): Promise<incomeTypesDocument> {
        return await this.incomeTypesModel.findById(incomeTypesId).exec();
      }
    
      async update(incomeTypesId: string, incomeTypesDto: incomeTypesDto): Promise<incomeTypesDocument> {
        const incomeTypesDocument = new this.incomeTypesModel(incomeTypesDto);
        return await this.incomeTypesModel.findByIdAndUpdate(incomeTypesId, incomeTypesDocument, {
          new: true,
        });
      }
    
      async delete(jobPositiontId: string): Promise<incomeTypesDocument> {
        return await this.incomeTypesModel.findByIdAndDelete(jobPositiontId);
      }
}
