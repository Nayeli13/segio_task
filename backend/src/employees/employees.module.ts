import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeesController } from './controllers/employees.controller';
import { EmployeesSchema } from './schemas/employees.schema';
import { EmployeesService } from './services/employees.service';

@Module({
  controllers: [EmployeesController],
  imports:[MongooseModule.forFeature([{ name: 'employees', schema: EmployeesSchema }])],
  providers: [EmployeesService]
})
export class EmployeesModule {}
