import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type employeesDocument = Employees & Document;

@Schema()
export class Employees {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, auto: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  identificationNumber: string;

  @Prop({ required: true })
  department: string;

  @Prop({ required: true })
  salary: number;

  @Prop({ required: true })
  Position: string;

  @Prop({ required: false })
  payrollId: string;
}

export const EmployeesSchema = SchemaFactory.createForClass(Employees);
