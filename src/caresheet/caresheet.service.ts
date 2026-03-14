import { Injectable } from '@nestjs/common';
import { CreateCaresheetDto } from './dto/create-caresheet.dto';
import { UpdateCaresheetDto } from './dto/update-caresheet.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class CaresheetService {
  constructor(
    private prisma: PrismaService,
    private cloudinaryService: CloudinaryService,
  ) {}

  async create(
    createCaresheetDto: CreateCaresheetDto,
    authorId: string,
    file?: Express.Multer.File,
  ) {
    let imageUrl: string | undefined;

    if (file) {
      imageUrl = await this.cloudinaryService.uploadImageStream(file);
    }

    return this.prisma.careSheet.create({
      data: {
        ...createCaresheetDto,
        authorId,
        imageUrl,
      },
    });
  }

  findAll() {
    return this.prisma.careSheet.findMany({ where: { published: true } });
  }

  findDrafts() {
    return this.prisma.careSheet.findMany({ where: { published: false } });
  }

  findOne(id: string) {
    return this.prisma.careSheet.findUnique({ where: { id } });
  }

  async update(
    id: string,
    updateCaresheetDto: UpdateCaresheetDto,
    file?: Express.Multer.File,
  ) {
    let imageUrl: string | undefined;

    if (file) {
      imageUrl = await this.cloudinaryService.uploadImageStream(file);
    }

    return this.prisma.careSheet.update({
      where: { id },
      data: {
        ...updateCaresheetDto,
        ...(imageUrl && { imageUrl }),
      },
    });
  }

  remove(id: string) {
    return this.prisma.careSheet.delete({ where: { id } });
  }
}
