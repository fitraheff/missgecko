import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { GeckoModule } from './modules/gecko/gecko.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { config } from './config/app.config';
import { CompanyModule } from './modules/company/company.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { LoggerModule } from './logger/logger.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { ReviewModule } from './review/review.module';

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
    ThrottlerModule.forRoot([
      {
        name: 'global',
        ttl: 1000,
        limit: 3,
      },
    ]),
    LoggerModule,
    CloudinaryModule,
    ReviewModule,
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
