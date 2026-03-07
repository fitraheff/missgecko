import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { GeckoModule } from './gecko/gecko.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, GeckoModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
