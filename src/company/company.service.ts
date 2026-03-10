import { Injectable } from '@nestjs/common';
// import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  // create(createCompanyDto: CreateCompanyDto) {
  //   return this.prisma.company.create({ data: createCompanyDto });
  // }

  // findAll() {
  //   return `This action returns all company`;
  // }

  findOne(id: number) {
    return this.prisma.company.findUnique({ where: { id } });
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return this.prisma.company.update({
      where: { id },
      data: updateCompanyDto,
    });
  }

  // remove(id: number) {
  //   return `This action removes a #${id} company`;
  // }
}
