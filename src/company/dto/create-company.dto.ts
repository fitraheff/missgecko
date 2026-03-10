import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  IsUrl,
  IsEmail,
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
  @IsNotEmpty()
  @MinLength(3)
  misi: string;

  @ApiProperty()
  @IsUrl()
  @IsNotEmpty()
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
  tentangkami: string;
}
