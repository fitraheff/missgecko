import { Company } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CompanyEntity implements Company {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  visi: string;

  @ApiProperty()
  misi: string;

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
  tentangkami: string;
}
