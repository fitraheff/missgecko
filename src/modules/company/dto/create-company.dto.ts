import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  IsUrl,
  IsEmail,
  IsOptional,
} from 'class-validator';

export class CreateCompanyDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  visi: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  misi: string;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    required: false,
  })
  @IsOptional()
  logo: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  alamat: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  @MinLength(3)
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(15)
  whatsapp: string;

  @ApiProperty()
  @IsUrl()
  @IsNotEmpty()
  instagram: string;

  @ApiProperty()
  @IsUrl()
  @IsNotEmpty()
  tiktok: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  deskripsi: string;
}
