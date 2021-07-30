import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type incomeTypesDocument = incomeTypes & Document;

@Schema()
export class incomeTypes {
    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
    id:          string;

    @Prop({ required: true })
    name:        string;

    @Prop({ required: true })
    salary:    number;

    @Prop({ required: true })
    status:       boolean;

}

export const incomeTypesSchema = SchemaFactory.createForClass(incomeTypes);