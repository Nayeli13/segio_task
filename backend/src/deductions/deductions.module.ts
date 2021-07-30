import { Module } from '@nestjs/common';
import { DeductionsController } from './controllers/deductions.controller';
import { DeductionsService } from './services/deductions.service';

@Module({
    controllers: [DeductionsController],
    providers: [DeductionsService],
})
export class DeductionsModule {}
