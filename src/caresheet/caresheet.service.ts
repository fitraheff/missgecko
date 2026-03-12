/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { CreateCaresheetDto } from './dto/create-caresheet.dto';
import { UpdateCaresheetDto } from './dto/update-caresheet.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CaresheetService {
  constructor(private prisma: PrismaService) {}

  create(createCaresheetDto: CreateCaresheetDto, authorId: string) {
    return this.prisma.careSheet.create({
      data: {
        ...createCaresheetDto,
        authorId,
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

  update(id: string, updateCaresheetDto: UpdateCaresheetDto) {
    return this.prisma.careSheet.update({
      where: { id },
      data: updateCaresheetDto,
    });
  }

  remove(id: string) {
    return this.prisma.careSheet.delete({ where: { id } });
  }
}
