import { Module } from '@nestjs/common';
import { CaresheetService } from './caresheet.service';
import { CaresheetController } from './caresheet.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CaresheetController],
  providers: [CaresheetService],
  imports: [PrismaModule],
})
export class CaresheetModule {}
