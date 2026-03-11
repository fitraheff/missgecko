import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  ParseIntPipe,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { ApiTags, ApiOkResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CompanyEntity } from './entities/company.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('company')
@ApiTags('Company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: CompanyEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const company = await this.companyService.findOne(id);
    if (!company) {
      throw new NotFoundException('Company not found');
    }
    return company;
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: CompanyEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCompanyDto: UpdateCompanyDto,
  ) {
    return this.companyService.update(id, updateCompanyDto);
  }
}
