import { Caresheet } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CaresheetEntity implements Caresheet {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty({ required: false, nullable: true })
  description?: string | null;

  @ApiProperty()
  content: string;

  @ApiProperty({ required: false, nullable: true })
  imageUrl?: string | null;

  @ApiProperty({ required: false, nullable: true })
  species?: string | null;

  @ApiProperty()
  published: boolean;

  @ApiProperty()
  slug: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
