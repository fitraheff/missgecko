import { NestFactory, HttpAdapterHost, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {
  ValidationPipe,
  HttpStatus,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { PrismaClientExceptionFilter } from 'nestjs-prisma';
import helmet from 'helmet';
import { LoggerService } from './logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  app.useLogger(app.get(LoggerService));

  app.use(helmet());

  app.enableCors();

  //   // Production
  //  if (process.env.NODE_ENV === 'production') {
  // app.enableCors({
  //   origin: process.env.ALLOWED_ORIGINS?.split(',') || [],
  //   origin: ['https://domain-anda.com', 'https://admin.domain-anda.com'],
  //   credentials: true, // Jika pakai cookie/authorization header
  //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  //   allowedHeaders: ['Content-Type', 'Authorization'],
  // });
  // } else {
  // app.enableCors();
  // }

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(
    new PrismaClientExceptionFilter(httpAdapter, {
      P2000: HttpStatus.BAD_REQUEST, // PrismaClientKnownRequestError: Value out of range for type.
      P2025: HttpStatus.NOT_FOUND, // PrismaClientKnownRequestError: Record not found
      P2002: HttpStatus.CONFLICT, // PrismaClientKnownRequestError: Unique constraint failed
    }),
  );

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  const config = new DocumentBuilder()
    .setTitle('Gecko')
    .setDescription('The Gecko API description')
    .setVersion('0.1')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
