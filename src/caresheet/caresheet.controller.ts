import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CaresheetService } from './caresheet.service';
import { CreateCaresheetDto } from './dto/create-caresheet.dto';
import { UpdateCaresheetDto } from './dto/update-caresheet.dto';
import { ApiTags, ApiOkResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { CaresheetEntity } from './entities/caresheet.entity';

@Controller('caresheet')
@ApiTags('Caresheet')
export class CaresheetController {
  constructor(private readonly caresheetService: CaresheetService) {}

  @Post()
  @ApiCreatedResponse({ type: CaresheetEntity })
  create(@Body() createCaresheetDto: CreateCaresheetDto) {
    return this.caresheetService.create(createCaresheetDto);
  }

  @Get()
  @ApiOkResponse({ type: [CaresheetEntity] })
  findAll() {
    return this.caresheetService.findAll();
  }

  @Get('drafts')
  @ApiOkResponse({ type: [CaresheetEntity] })
  findDrafts() {
    return this.caresheetService.findDrafts();
  }

  @Get(':id')
  @ApiOkResponse({ type: CaresheetEntity })
  findOne(@Param('id') id: string) {
    return this.caresheetService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: CaresheetEntity })
  update(
    @Param('id') id: string,
    @Body() updateCaresheetDto: UpdateCaresheetDto,
  ) {
    return this.caresheetService.update(id, updateCaresheetDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CaresheetEntity })
  remove(@Param('id') id: string) {
    return this.caresheetService.remove(id);
  }
}
