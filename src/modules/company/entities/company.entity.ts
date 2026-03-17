import { Company } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CompanyEntity implements Company {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  visi: string;

  @ApiProperty({ required: false, nullable: true })
  misi: string | null;

  @ApiProperty()
  logo: string;

  @ApiProperty()
  alamat: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  whatsapp: string;

  @ApiProperty()
  instagram: string;

  @ApiProperty()
  tiktok: string;

  @ApiProperty()
  deskripsi: string;
}
