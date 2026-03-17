import { Review } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../../users/entities/user.entity';

export class ReviewEntity implements Review {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  message: string;

  @ApiProperty({ required: false, nullable: true })
  photo: string | null;

  @ApiProperty()
  published: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ required: false, nullable: true })
  authorId: string | null;

  @ApiProperty({ required: false, type: UserEntity, nullable: true })
  author?: UserEntity | null;

  constructor({ author, ...data }: Partial<ReviewEntity>) {
    Object.assign(this, data);

    if (author) {
      this.author = new UserEntity(author);
    }
  }
}
