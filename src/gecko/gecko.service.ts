import { Injectable } from '@nestjs/common';
import { CreateGeckoDto } from './dto/create-gecko.dto';
import { UpdateGeckoDto } from './dto/update-gecko.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GeckoService {
  constructor(private prisma: PrismaService) {}
  create(createGeckoDto: CreateGeckoDto, authorId: string) {
    return this.prisma.gecko.create({
      data: {
        ...createGeckoDto,
        authorId,
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
      // include: { author: true },
    });
  }

  update(id: string, updateGeckoDto: UpdateGeckoDto) {
    return this.prisma.gecko.update({
      where: { id },
      data: updateGeckoDto,
    });
  }

  remove(id: string) {
    return this.prisma.gecko.delete({ where: { id } });
  }
}
