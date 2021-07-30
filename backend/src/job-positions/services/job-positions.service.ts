import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JobPositionDto } from '../dto/job-positions.dto';
import { JobPositionDocument } from '../schemas/job-positions.schema';

@Injectable()
export class JobPositionsService {
  constructor(
    @InjectModel('jobPosition') private jobPositionModel: Model<JobPositionDocument>,
  ) {}

  async create(createdJobPositiontDto: JobPositionDto): Promise<JobPositionDocument> {
    const createdJobPosition = new this.jobPositionModel(createdJobPositiontDto);
    return await createdJobPosition.save();
  }

  async get(): Promise<JobPositionDocument[]> {
    return await this.jobPositionModel.find().exec();
  }

  async getById(jobPositiontId: string): Promise<JobPositionDocument> {
    return await this.jobPositionModel.findById(jobPositiontId).exec();
  }

  async update(jobPositiontId: string, jobPositionDto: JobPositionDto): Promise<JobPositionDocument> {
    const jobPositionDocument = new this.jobPositionModel(jobPositionDto);
    return await this.jobPositionModel.findByIdAndUpdate(jobPositiontId, jobPositionDocument, {
      new: true,
    });
  }

  async delete(jobPositiontId: string): Promise<JobPositionDocument> {
    return await this.jobPositionModel.findByIdAndDelete(jobPositiontId);
  }
}
