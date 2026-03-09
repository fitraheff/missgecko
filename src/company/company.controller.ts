import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { ApiTags, ApiOkResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { CompanyEntity } from './entities/company.entity';

@Controller('company')
@ApiTags('Company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  @ApiCreatedResponse({ type: CompanyEntity })
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.create(createCompanyDto);
  }

  // @Get()
  // findAll() {
  //   return this.companyService.findAll();
  // }

  @Get(':id')
  @ApiOkResponse({ type: CompanyEntity })
  findOne(@Param('id') id: string) {
    return this.companyService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: CompanyEntity })
  update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companyService.update(+id, updateCompanyDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.companyService.remove(+id);
  // }
}
