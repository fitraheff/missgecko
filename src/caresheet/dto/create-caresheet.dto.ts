import { ApiProperty } from '@nestjs/swagger';

export class CreateCaresheetDto {
  @ApiProperty()
  title: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty()
  content: string;

  @ApiProperty({ required: false })
  imageUrl?: string;

  @ApiProperty({ required: false })
  species?: string;

  @ApiProperty({ required: false, default: false })
  published?: boolean = false;

  @ApiProperty()
  slug: string;
}
