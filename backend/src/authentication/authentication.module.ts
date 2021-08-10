import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthenticationController } from './controllers/authentication.controller';
import { authSchema } from './schemas/authentication.schemas';
import { AuthenticationService } from './services/authentication.service';

@Module({
  controllers: [AuthenticationController],
  imports:[MongooseModule.forFeature([{ name: 'authentication', schema: authSchema }])],
  providers: [AuthenticationService]
})
export class AuthenticationModule {}
