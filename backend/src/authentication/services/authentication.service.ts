import { Injectable } from '@nestjs/common';
import { authentication } from '../schemas/authentication.schemas';
import {createUserDto} from '../dto/authentication.dto'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuthenticationService {

  constructor(
    @InjectModel('authentication') private departmentModel: Model<authentication>,
  ) {}
  
  async create(createUserDto: createUserDto) {
    const user = this.departmentModel.create(createUserDto);
    await (await user).save();

    delete (await user).password;
    return user;
  }

  async showById(id: number): Promise<authentication> {
    const user = await this.findById(id);

    delete user.password;
    return user;
  }

  async findById(id: any) {
    return await  this.departmentModel.findOne(id);
  }

  async findByEmail(email: string) {
    return await  this.departmentModel.findOne({
      where: {
        email: email,
      },
    });
  }
}
