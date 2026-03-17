import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsBoolean,
  MaxLength,
  MinLength,
  IsEnum,
} from 'class-validator';
import { Type, Transform } from 'class-transformer';
import { Status, Gender } from '@prisma/client';

export class CreateGeckoDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(255)
  name: string;

  @ApiProperty()
  @IsNumber()
  @Type(() => Number)
  @IsNotEmpty()
  harga: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(Status)
  status: Status;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(Gender)
  gender: Gender;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(1000)
  @ApiProperty({ required: false })
  deskripsi?: string;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    required: false,
  })
  @IsOptional()
  image?: any;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(255)
  @ApiProperty({ required: false })
  morph?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(255)
  @ApiProperty({ required: false })
  sire?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(255)
  @ApiProperty({ required: false })
  line?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(255)
  @ApiProperty({ required: false })
  dam?: string;

  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  @ApiProperty({ required: false })
  weight?: number;

  @ApiProperty()
  @IsNotEmpty()
  @Type(() => Date)
  dob: Date;

  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  @IsOptional()
  @ApiProperty({ required: false, default: false })
  published?: boolean = false;
}
