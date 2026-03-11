import { Module } from '@nestjs/common';
import { CaresheetService } from './caresheet.service';
import { CaresheetController } from './caresheet.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CaresheetController],
  providers: [CaresheetService],
  imports: [PrismaService],
})
export class CaresheetModule {}
