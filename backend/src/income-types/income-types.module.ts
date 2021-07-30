import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IncomeTypesController } from './controllers/income-types.controller';
import { incomeTypesSchema } from './schemas/income-types.schema';
import { IncomeTypesService } from './services/income-types.service';

@Module({
    controllers: [IncomeTypesController],
    imports:[MongooseModule.forFeature([{ name: 'incomeTypes', schema: incomeTypesSchema }])],
    providers: [IncomeTypesService],
})
export class IncomeTypesModule {}
