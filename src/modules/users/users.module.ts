import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { CloudinaryService } from '../../cloudinary/cloudinary.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, CloudinaryService],
  imports: [PrismaModule],
  exports: [UsersService],
})
export class UsersModule {}
