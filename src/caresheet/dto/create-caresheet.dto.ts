import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsBoolean,
  MaxLength,
  MinLength,
  IsUrl,
} from 'class-validator';

export class CreateCaresheetDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  @MinLength(3)
  title: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  @MinLength(3)
  @IsNotEmpty()
  description?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  imageUrl?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  @MinLength(3)
  @IsNotEmpty()
  species?: string;

  @ApiProperty({ required: false, default: false })
  @IsOptional()
  @IsBoolean()
  published?: boolean = false;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  slug: string;
}
