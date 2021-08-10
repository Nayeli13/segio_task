import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

//modules
import { IncomeTypesModule } from './income-types/income-types.module';
import { JobPositionsModule } from './job-positions/job-positions.module';
import { DepartmentsModule } from './departments/departments.module';
import { EmployeesModule } from './employees/employees.module';
import { DeductionsModule } from './deductions/deductions.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/paysheet'),
    IncomeTypesModule,
    JobPositionsModule,
    DepartmentsModule,
    EmployeesModule,
    DeductionsModule,
    AuthenticationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
