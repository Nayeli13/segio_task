import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { JobPositionDto } from '../dto/job-positions.dto';
import { JobPositionsService } from '../services/job-positions.service';

@Controller('job-positions')
export class JobPositionsController { 
    
    constructor(private jobPositionsService: JobPositionsService) {}

    @Post('/create')
    async createClient(@Res() res, @Body() createdJobPositiontDto: JobPositionDto){
        const jobPositions = await this.jobPositionsService.create(createdJobPositiontDto)
        res.status(HttpStatus.OK).json({
            message: 'customer created successfully',
            jobPositions
        })
    }

    @Get('/')
    async getClients(@Res() res){
    const jobPositions = await this.jobPositionsService.get()
        res.status(HttpStatus.OK).json({
            message: 'customer created successfully',
            jobPositions
        })
    }

    @Get('/:id')
    async getClient(@Res() res, @Param('id') jobPositiontId){
    const jobPositions = await this.jobPositionsService.getById(jobPositiontId)
        res.status(HttpStatus.OK).json({
            message: 'customer created successfully',
            jobPositions 
        })
    }

    @Put('/update/:id')
    async updateClient(@Res() res, @Param('id') jobPositiontId, @Body() createdJobPositiontDto: JobPositionDto){
        const jobPositions = await this.jobPositionsService.update(jobPositiontId,createdJobPositiontDto)
        
        res.status(HttpStatus.OK).json({
            message: 'received',
            jobPositions
        })
    } 

    @Delete('/delete/:id')
    async deletePost(@Res() res, @Param('id') jobPositiontId){
        const jobPositions = await this.jobPositionsService.delete(jobPositiontId)

        res.status(HttpStatus.OK).json({
            message: 'received',
            jobPositions
        })
    }
}
