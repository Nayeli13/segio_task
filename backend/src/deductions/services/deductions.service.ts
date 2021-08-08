import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { deductionDto } from '../dto/deductions.dto';
import { deductionDocument } from '../schemas/deductions.schema';

@Injectable()
export class DeductionsService {
    constructor(
        @InjectModel('deductions') private deductionModel: Model<deductionDocument>,
      ) {}
    
      async create(createdeductionDto: deductionDto): Promise<deductionDocument> {
        const createddeduction = new this.deductionModel(createdeductionDto);
        return await createddeduction.save();
      }
    
      async get(): Promise<deductionDocument[]> {
        return await this.deductionModel.find().exec();
      }
    
      async getById(deductionId: string): Promise<deductionDocument> {
        return await this.deductionModel.findById(deductionId).exec();
      }
    
      async update(deductionId: string, deductionDto: deductionDto): Promise<deductionDocument> {
        const deductionDocument = new this.deductionModel(deductionDto);
        return await this.deductionModel.findByIdAndUpdate(deductionId, deductionDocument, {
          new: true,
        });
      }

      async delete(deductionId: string): Promise<deductionDocument> {
        return await this.deductionModel.findByIdAndDelete(deductionId);
      }
}
