import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { EmployeesDto } from '../dto/employees.dto';
import { EmployeesService } from '../services/employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}

  @Post('/create')
  async createClient(@Res() res, @Body() createdEmployeestDto: EmployeesDto) {
    const employees = await this.employeesService.create(createdEmployeestDto);

    res.status(HttpStatus.OK).json({
      message: 'employees created successfully',
      employees,
    });
  }

  @Get('/')
  async getClients(@Res() res) {
    const employees = await this.employeesService.get();
    res.status(HttpStatus.OK).json(employees);
  }

  @Get('/:id')
  async getClient(@Res() res, @Param('id') employeesId) {
    const employees = await this.employeesService.getById(employeesId);
    res.status(HttpStatus.OK).json({
      message: 'employees created successfully',
      employees,
    });
  }

  @Put('/update/:id')
  async updateClient(
    @Res() res,
    @Param('id') employeesId,
    @Body() createdEmployeestDto: EmployeesDto,
  ) {
    const employees = await this.employeesService.update(
      employeesId,
      createdEmployeestDto,
    );

    res.status(HttpStatus.OK).json({
      message: 'received',
      employees,
    });
  }

  @Delete('/delete/:id')
  async deletePost(@Res() res, @Param('id') employeesId) {
    const employees = await this.employeesService.delete(employeesId);

    res.status(HttpStatus.OK).json({
      message: 'received',
      employees,
    });
  }
}
