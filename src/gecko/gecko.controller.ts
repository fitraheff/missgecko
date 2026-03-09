/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
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
} from '@nestjs/common';
import { GeckoService } from './gecko.service';
import { CreateGeckoDto } from './dto/create-gecko.dto';
import { UpdateGeckoDto } from './dto/update-gecko.dto';
import {
  ApiTags,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { GeckoEntity } from './entities/gecko.entity';

@Controller('gecko')
@ApiTags('Gecko')
export class GeckoController {
  constructor(private readonly geckoService: GeckoService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: GeckoEntity })
  async create(@Body() dto: CreateGeckoDto, @Req() req: any) {
    return new GeckoEntity(await this.geckoService.create(dto, req.user.id));
  }

  @Get('drafts')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: [GeckoEntity] })
  async findDrafts() {
    const drafts = await this.geckoService.findDrafts();
    return drafts.map((gecko) => new GeckoEntity(gecko));
  }

  @Get()
  @ApiOkResponse({ type: [GeckoEntity] })
  async findAll() {
    const geckos = await this.geckoService.findAll();
    return geckos.map((gecko) => new GeckoEntity(gecko));
  }

  @Get(':id')
  @ApiOkResponse({ type: GeckoEntity })
  async findOne(@Param('id') id: string) {
    const gecko = await this.geckoService.findOne(id);
    if (!gecko) {
      throw new NotFoundException(`Gecko with id ${id} not found`);
    }
    return gecko;
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: GeckoEntity })
  async update(
    @Param('id') id: string,
    @Body() updateGeckoDto: UpdateGeckoDto,
  ) {
    return new GeckoEntity(await this.geckoService.update(id, updateGeckoDto));
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: GeckoEntity })
  async remove(@Param('id') id: string) {
    return new GeckoEntity(await this.geckoService.remove(id));
  }
}
