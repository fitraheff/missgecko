import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { GeckoModule } from './gecko/gecko.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { config } from './config/configuration';
import { CompanyModule } from './company/company.module';
import { CaresheetModule } from './caresheet/caresheet.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [
    PrismaModule,
    GeckoModule,
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    CompanyModule,
    CaresheetModule,
    ThrottlerModule.forRoot([
      {
        name: 'global',
        ttl: 1000,
        limit: 3,
      },
    ]),
    LoggerModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
