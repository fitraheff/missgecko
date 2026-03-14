import { Module } from '@nestjs/common';
import { CaresheetService } from './caresheet.service';
import { CaresheetController } from './caresheet.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Module({
  controllers: [CaresheetController],
  providers: [CaresheetService, CloudinaryService],
  imports: [PrismaModule],
})
export class CaresheetModule {}
