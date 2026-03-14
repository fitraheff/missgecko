/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  UseGuards,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CaresheetService } from './caresheet.service';
import { CreateCaresheetDto } from './dto/create-caresheet.dto';
import { UpdateCaresheetDto } from './dto/update-caresheet.dto';
import {
  ApiTags,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiBearerAuth,
  ApiConsumes,
} from '@nestjs/swagger';
import { CaresheetEntity } from './entities/caresheet.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('caresheet')
@ApiTags('Caresheet')
export class CaresheetController {
  constructor(private readonly caresheetService: CaresheetService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiCreatedResponse({ type: CaresheetEntity })
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createCaresheetDto: CreateCaresheetDto,
    @Req() req: any,
  ) {
    return new CaresheetEntity(
      await this.caresheetService.create(createCaresheetDto, req.user.id, file),
    );
  }

  @Get()
  @ApiOkResponse({ type: [CaresheetEntity] })
  async findAll() {
    const caresheets = await this.caresheetService.findAll();
    return caresheets.map((caresheet) => new CaresheetEntity(caresheet));
  }

  @Get('drafts')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: [CaresheetEntity] })
  async findDrafts() {
    const drafts = await this.caresheetService.findDrafts();
    return drafts.map((caresheet) => new CaresheetEntity(caresheet));
  }

  @Get(':id')
  @ApiOkResponse({ type: CaresheetEntity })
  async findOne(@Param('id') id: string) {
    const caresheet = await this.caresheetService.findOne(id);

    if (!caresheet) {
      throw new NotFoundException(`Caresheet with ID ${id} not found`);
    }

    return new CaresheetEntity(caresheet);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiOkResponse({ type: CaresheetEntity })
  async update(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() updateCaresheetDto: UpdateCaresheetDto,
  ) {
    return new CaresheetEntity(
      await this.caresheetService.update(id, updateCaresheetDto, file),
    );
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: CaresheetEntity })
  async remove(@Param('id') id: string) {
    return new CaresheetEntity(await this.caresheetService.remove(id));
  }
}
