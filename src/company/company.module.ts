import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Module({
  controllers: [CompanyController],
  providers: [CompanyService, CloudinaryService],
  imports: [PrismaModule],
})
export class CompanyModule {}
