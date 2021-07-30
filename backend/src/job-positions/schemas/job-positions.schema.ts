import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type JobPositionDocument = JobPosition & Document;

@Schema()
export class JobPosition {
    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
    id:          string;

    @Prop({ required: true })
    name:        string;

    @Prop({ required: true })
    riskLevel:    string;

    @Prop({ required: true })
    minimumSalaryLevel:       number;

    @Prop({ required: true })
    maximumSalaryLevel:       number;
}

export const jobPositionSchema = SchemaFactory.createForClass(JobPosition);