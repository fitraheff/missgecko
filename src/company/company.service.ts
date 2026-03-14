import { Injectable } from '@nestjs/common';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class CompanyService {
  constructor(
    private prisma: PrismaService,
    private cloudinaryService: CloudinaryService,
  ) {}

  findOne(id: number) {
    return this.prisma.company.findUnique({ where: { id } });
  }

  async update(
    id: number,
    updateCompanyDto: UpdateCompanyDto,
    file?: Express.Multer.File,
  ) {
    let logo: string | undefined;

    if (file) {
      logo = await this.cloudinaryService.uploadImageStream(file);
    }
    return this.prisma.company.update({
      where: { id },
      data: { ...updateCompanyDto, ...(logo && { logo }) },
    });
  }
}
