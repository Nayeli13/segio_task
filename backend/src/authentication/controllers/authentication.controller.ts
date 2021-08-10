import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AuthenticationService } from '../services/authentication.service';
import {createUserDto} from '../dto/authentication.dto'

@Controller('authentication')
export class AuthenticationController {
    constructor(private readonly authenticationService: AuthenticationService) {}

  @Post()
  create(@Body() createUserDto: createUserDto) {
    return this.authenticationService.create(createUserDto);
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return this.authenticationService.showById(+id);
  }
}
function Params(arg0: string) {
    throw new Error('Function not implemented.');
}

