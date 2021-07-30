import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type departmentDocument = Department & Document;

@Schema()
export class Department {
    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
    id:          string;

    @Prop({ required: true })
    name:        string;

    @Prop({ required: true })
    ubication:    string;

    @Prop({ required: true})
    responsable:          string;
}

export const departmentSchema = SchemaFactory.createForClass(Department); 