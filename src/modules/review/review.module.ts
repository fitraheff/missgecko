import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { CloudinaryService } from '../../cloudinary/cloudinary.service';

@Module({
  controllers: [ReviewController],
  providers: [ReviewService, CloudinaryService],
  imports: [PrismaModule],
})
export class ReviewModule {}
