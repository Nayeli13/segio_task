import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { incomeTypesDto } from '../dto/income-types.dto';
import { IncomeTypesService } from '../services/income-types.service';

@Controller('income-types')
export class IncomeTypesController {
    constructor(private incomeTypesService: IncomeTypesService) {}

    @Post('/create')
    async createClient(@Res() res, @Body() createdIncomeTypestDto: incomeTypesDto){
        const incomeTypes = await this.incomeTypesService.create(createdIncomeTypestDto)
        res.status(HttpStatus.OK).json({
            message: 'customer created successfully',
            incomeTypes
        })
    }

    @Get('/')
    async getClients(@Res() res){
    const incomeTypes = await this.incomeTypesService.get()
        res.status(HttpStatus.OK).json({
            message: 'customer created successfully',
            incomeTypes
        })
    }

    @Get('/:id')
    async getClient(@Res() res, @Param('id') incomeTypesId){
    const incomeTypes = await this.incomeTypesService.getById(incomeTypesId)
        res.status(HttpStatus.OK).json({
            message: 'customer created successfully',
            incomeTypes 
        })
    }

    @Put('/update/:id')
    async updateClient(@Res() res, @Param('id') incomeTypesId, @Body() createdIncomeTypestDto: incomeTypesDto){
        const incomeTypes = await this.incomeTypesService.update(incomeTypesId,createdIncomeTypestDto)
        
        res.status(HttpStatus.OK).json({
            message: 'received',
            incomeTypes
        })
    } 

    @Delete('/delete/:id')
    async deletePost(@Res() res, @Param('id') incomeTypesId){
        const incomeTypes = await this.incomeTypesService.delete(incomeTypesId)

        res.status(HttpStatus.OK).json({
            message: 'received',
            incomeTypes
        })
    }
}
