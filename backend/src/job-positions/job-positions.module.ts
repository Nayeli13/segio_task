import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobPositionsController } from './controllers/job-positions.controller';
import { jobPositionSchema } from './schemas/job-positions.schema';
import { JobPositionsService } from './services/job-positions.service';

@Module({
  controllers: [JobPositionsController],
  imports: [
    MongooseModule.forFeature([
      { name: 'jobPosition', schema: jobPositionSchema },
    ]),
  ],
  providers: [JobPositionsService],
})
export class JobPositionsModule {}
