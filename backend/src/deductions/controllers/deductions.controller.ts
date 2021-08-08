import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { deductionDto } from '../dto/deductions.dto';
import { DeductionsService } from '../services/deductions.service';

@Controller('deductions')
export class DeductionsController {
    constructor(private deductionService: DeductionsService) {}

    @Post('/create')
    async createClient(@Res() res, @Body() createddeductionDto: deductionDto){
        const deduction = await this.deductionService.create(createddeductionDto)
        res.status(HttpStatus.OK).json({
            message: 'employees created successfully',
            deduction
        })
    }

    @Get('/')
    async getClients(@Res() res){
    const deduction = await this.deductionService.get()
        res.status(HttpStatus.OK).json({
            message: 'employees created successfully',
            deduction
        })
    }

    @Get('/:id')
    async getClient(@Res() res, @Param('id') deductionId){
    const deduction = await this.deductionService.getById(deductionId)
        res.status(HttpStatus.OK).json({
            message: 'employees created successfully',
            deduction 
        })
    }

    @Put('/update/:id')
    async updateClient(@Res() res, @Param('id') deductionId, @Body() createdDepartmentDto: deductionDto){
        const deduction = await this.deductionService.update(deductionId,createdDepartmentDto)
        
        res.status(HttpStatus.OK).json({
            message: 'received',
            deduction
        })
    } 

    @Delete('/delete/:id')
    async deletePost(@Res() res, @Param('id') deductionId){
        const deduction = await this.deductionService.delete(deductionId)

        res.status(HttpStatus.OK).json({
            message: 'received',
            deduction
        })
    }
}
