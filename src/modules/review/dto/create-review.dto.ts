import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  MinLength,
  MaxLength,
  IsBoolean,
} from 'class-validator';
import { Transform } from 'class-transformer';
export class CreateReviewDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(255)
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  message: string;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    required: false,
  })
  @IsOptional()
  photo?: any;

  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  @IsOptional()
  @ApiProperty({ required: false, default: false })
  published?: boolean = false;
}
