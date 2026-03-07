import { Gecko } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from 'src/users/entities/user.entity';

export class GeckoEntity implements Gecko {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  harga: number;

  @ApiProperty()
  stok: number;

  @ApiProperty({ required: false })
  deskripsi: string;

  @ApiProperty({ required: false, nullable: true })
  imageUrl: string | null;

  @ApiProperty({ required: false, nullable: true })
  jenis: string | null;

  @ApiProperty()
  published: boolean;

  @ApiProperty({ required: false })
  authorId: string;

  @ApiProperty({ required: false, type: UserEntity })
  author?: UserEntity;

  constructor({ author, ...data }: Partial<GeckoEntity>) {
    Object.assign(this, data);
    if (author) {
      this.author = new UserEntity(author);
    }
  }

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
