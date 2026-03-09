import { ApiProperty } from '@nestjs/swagger';

export class CreateCompanyDto {
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
  tikTok: string;

  @ApiProperty()
  tentangKami: string;
}
