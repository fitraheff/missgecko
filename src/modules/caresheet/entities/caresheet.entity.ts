import { CareSheet } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from 'src/modules/users/entities/user.entity';

export class CaresheetEntity implements CareSheet {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty({ required: false, nullable: true })
  description: string | null;

  @ApiProperty()
  content: string;

  @ApiProperty({ required: false, nullable: true })
  imageUrl: string | null;

  @ApiProperty({ required: false, nullable: true })
  species: string | null;

  @ApiProperty()
  published: boolean;

  @ApiProperty()
  slug: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ required: false, nullable: true })
  authorId: string | null;

  @ApiProperty({ required: false, type: UserEntity, nullable: true })
  author?: UserEntity | null;

  constructor({ author, ...data }: Partial<CaresheetEntity>) {
    Object.assign(this, data);

    if (author) {
      this.author = new UserEntity(author);
    }
  }
}
