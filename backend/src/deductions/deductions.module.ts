import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DeductionsController } from './controllers/deductions.controller';
import { deductionSchema } from './schemas/deductions.schema';
import { DeductionsService } from './services/deductions.service';

@Module({
    controllers: [DeductionsController],
    imports:[MongooseModule.forFeature([{ name: 'deductions', schema: deductionSchema }])],
    providers: [DeductionsService],
})
export class DeductionsModule {}
