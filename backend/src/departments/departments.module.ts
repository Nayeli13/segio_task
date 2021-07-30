import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentsController } from './controllers/departments.controller';
import { departmentSchema } from './schemas/departments.schemas';
import { DepartmentsService } from './services/departments.service';

@Module({
  providers: [DepartmentsService],
  imports:[MongooseModule.forFeature([{ name: 'departments', schema: departmentSchema }])],
  controllers: [DepartmentsController]
})
export class DepartmentsModule {}
