import { Module } from '@nestjs/common';
import { GeckoService } from './gecko.service';
import { GeckoController } from './gecko.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { CloudinaryService } from '../../cloudinary/cloudinary.service';

@Module({
  controllers: [GeckoController],
  providers: [GeckoService, CloudinaryService],
  imports: [PrismaModule],
})
export class GeckoModule {}
