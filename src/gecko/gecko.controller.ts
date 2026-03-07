import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { GeckoService } from './gecko.service';
import { CreateGeckoDto } from './dto/create-gecko.dto';
import { UpdateGeckoDto } from './dto/update-gecko.dto';
import { ApiTags, ApiOkResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { GeckoEntity } from './entities/gecko.entity';

@Controller('gecko')
@ApiTags('Gecko')
export class GeckoController {
  constructor(private readonly geckoService: GeckoService) {}

  @Post()
  @ApiCreatedResponse({ type: GeckoEntity })
  async create(@Body() createGeckoDto: CreateGeckoDto) {
    return new GeckoEntity(await this.geckoService.create(createGeckoDto));
  }

  @Get('drafts')
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
  @ApiOkResponse({ type: GeckoEntity })
  async update(
    @Param('id') id: string,
    @Body() updateGeckoDto: UpdateGeckoDto,
  ) {
    return new GeckoEntity(await this.geckoService.update(id, updateGeckoDto));
  }

  @Delete(':id')
  @ApiOkResponse({ type: GeckoEntity })
  async remove(@Param('id') id: string) {
    return new GeckoEntity(await this.geckoService.remove(id));
  }
}
