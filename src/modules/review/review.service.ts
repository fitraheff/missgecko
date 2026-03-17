import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { CloudinaryService } from '../../cloudinary/cloudinary.service';

@Injectable()
export class ReviewService {
  constructor(
    private prisma: PrismaService,
    private cloudinary: CloudinaryService,
  ) {}

  async create(
    createReviewDto: CreateReviewDto,
    authorId: string,
    file?: Express.Multer.File,
  ) {
    let photo: string | undefined;

    if (file) {
      photo = await this.cloudinary.uploadImageStream(file);
    }

    return this.prisma.review.create({
      data: {
        ...createReviewDto,
        authorId,
        photo,
      },
    });
  }

  findAll() {
    return this.prisma.review.findMany();
  }

  findOne(id: string) {
    return this.prisma.review.findUnique({
      where: { id },
      include: { author: true },
    });
  }

  async update(
    id: string,
    updateReviewDto: UpdateReviewDto,
    file?: Express.Multer.File,
  ) {
    let photo: string | undefined;

    if (file) {
      photo = await this.cloudinary.uploadImageStream(file);
    }

    return this.prisma.review.update({
      where: { id },
      data: { ...updateReviewDto, ...(photo && { photo }) },
    });
  }

  remove(id: string) {
    return this.prisma.review.delete({
      where: { id },
    });
  }
}
