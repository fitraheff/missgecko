import { Injectable } from '@nestjs/common';
import { CreateGeckoDto } from './dto/create-gecko.dto';
import { UpdateGeckoDto } from './dto/update-gecko.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { CloudinaryService } from '../../cloudinary/cloudinary.service';

@Injectable()
export class GeckoService {
  constructor(
    private prisma: PrismaService,
    private cloudinaryService: CloudinaryService,
  ) {}
  async create(
    createGeckoDto: CreateGeckoDto,
    authorId: string,
    file?: Express.Multer.File,
  ) {
    let imageUrl: string | undefined;

    if (file) {
      imageUrl = await this.cloudinaryService.uploadImageStream(file);
    }

    return this.prisma.gecko.create({
      data: {
        ...createGeckoDto,
        authorId,
        imageUrl,
      },
    });
  }

  findDrafts() {
    return this.prisma.gecko.findMany({ where: { published: false } });
  }

  findAll() {
    return this.prisma.gecko.findMany({ where: { published: true } });
  }

  findOne(id: string) {
    return this.prisma.gecko.findUnique({
      where: { id },
      include: { author: true },
    });
  }

  async update(
    id: string,
    updateGeckoDto: UpdateGeckoDto,
    file?: Express.Multer.File,
  ) {
    let imageUrl: string | undefined;

    if (file) {
      imageUrl = await this.cloudinaryService.uploadImageStream(file);
    }
    return this.prisma.gecko.update({
      where: { id },
      data: { ...updateGeckoDto, ...(imageUrl && { imageUrl }) },
    });
  }

  remove(id: string) {
    return this.prisma.gecko.delete({ where: { id } });
  }
}
