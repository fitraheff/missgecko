import { Injectable } from '@nestjs/common';
import { CreateCaresheetDto } from './dto/create-caresheet.dto';
import { UpdateCaresheetDto } from './dto/update-caresheet.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CaresheetService {
  constructor(private prisma: PrismaService) {}

  create(createCaresheetDto: CreateCaresheetDto) {
    return this.prisma.caresheet.create({ data: createCaresheetDto });
  }

  findAll() {
    return this.prisma.caresheet.findMany({ where: { published: true } });
  }

  findDrafts() {
    return this.prisma.caresheet.findMany({ where: { published: false } });
  }

  findOne(id: string) {
    return this.prisma.caresheet.findUnique({ where: { id } });
  }

  update(id: number, updateCaresheetDto: UpdateCaresheetDto) {
    return this.prisma.caresheet.update({
      where: { id },
      data: updateCaresheetDto,
    });
  }

  remove(id: number) {
    return this.prisma.caresheet.delete({ where: { id } });
  }
}
