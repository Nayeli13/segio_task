import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type deductionDocument = Deduction & Document;

@Schema()
export class Deduction {
    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
    id:          string;

    @Prop({ required: true })
    name:        string;

    @Prop({ required: true })
    DependsOnSalary:    number;

    @Prop({ required: true})
    status:          boolean;
}

export const deductionSchema = SchemaFactory.createForClass(Deduction); 