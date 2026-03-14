import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsBoolean,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateGeckoDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(255)
  name: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  harga: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  stok: number;

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
  jenis?: string;

  // @IsNotEmpty()
  // @IsString()
  // @IsOptional()
  // @ApiProperty({ required: false })
  // authorId?: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false, default: false })
  published?: boolean = false;
}
