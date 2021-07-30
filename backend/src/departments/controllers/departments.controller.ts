import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { departmentsDto } from '../dto/departments.dto';
import { DepartmentsService } from '../services/departments.service';

@Controller('departments')
export class DepartmentsController {
    constructor(private departmentsService: DepartmentsService) {}

    @Post('/create')
    async createClient(@Res() res, @Body() createdDepartmentsDto: departmentsDto){
        const departments = await this.departmentsService.create(createdDepartmentsDto)
        res.status(HttpStatus.OK).json({
            message: 'employees created successfully',
            departments
        })
    }

    @Get('/')
    async getClients(@Res() res){
    const departments = await this.departmentsService.get()
        res.status(HttpStatus.OK).json({
            message: 'employees created successfully',
            departments
        })
    }

    @Get('/:id')
    async getClient(@Res() res, @Param('id') departmentsId){
    const departments = await this.departmentsService.getById(departmentsId)
        res.status(HttpStatus.OK).json({
            message: 'employees created successfully',
            departments 
        })
    }

    @Put('/update/:id')
    async updateClient(@Res() res, @Param('id') departmentsId, @Body() createdDepartmentDto: departmentsDto){
        const departments = await this.departmentsService.update(departmentsId,createdDepartmentDto)
        
        res.status(HttpStatus.OK).json({
            message: 'received',
            departments
        })
    } 

    @Delete('/delete/:id')
    async deletePost(@Res() res, @Param('id') departmentsId){
        const departments = await this.departmentsService.delete(departmentsId)

        res.status(HttpStatus.OK).json({
            message: 'received',
            departments
        })
    }
}
