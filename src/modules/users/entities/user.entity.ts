import { User, Role } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class UserEntity implements User {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: string;

  @ApiProperty({ required: false, nullable: true })
  name: string | null;

  @ApiProperty()
  email: string;

  @Exclude()
  password: string;

  @ApiProperty({ required: false, nullable: true })
  photoUrl: string | null;

  @ApiProperty()
  role: Role;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
