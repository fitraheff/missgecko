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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
