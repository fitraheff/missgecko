import { Module } from '@nestjs/common';
import { GeckoService } from './gecko.service';
import { GeckoController } from './gecko.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [GeckoController],
  providers: [GeckoService],
  imports: [PrismaModule],
})
export class GeckoModule {}
