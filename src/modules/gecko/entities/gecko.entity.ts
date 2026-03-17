import { Gecko, Status, Gender } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from 'src/modules/users/entities/user.entity';
export class GeckoEntity implements Gecko {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  harga: number;

  @ApiProperty()
  stok: number;

  @ApiProperty({ required: false, nullable: true })
  deskripsi: string | null;

  @ApiProperty({ required: false, nullable: true })
  imageUrl: string | null;

  @ApiProperty({ required: false, nullable: true })
  jenis: string | null;

  @ApiProperty()
  published: boolean;

  @ApiProperty({ required: false, nullable: true, enum: Gender })
  gender: Gender | null;

  @ApiProperty({ enum: Status, default: 'AVAILABLE' })
  status: Status;

  @ApiProperty({ required: false, nullable: true })
  morph: string | null;

  @ApiProperty({ required: false, nullable: true })
  dob: Date | null;
  @ApiProperty({ required: false, nullable: true })
  sire: string | null;

  @ApiProperty({ required: false, nullable: true })
  line: string | null;

  @ApiProperty({ required: false, nullable: true })
  dam: string | null;

  @ApiProperty({ required: false, nullable: true })
  weight: number | null;

  @ApiProperty({ required: false, nullable: true })
  authorId: string | null;

  @ApiProperty({ required: false, type: UserEntity, nullable: true })
  author?: UserEntity | null;

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
