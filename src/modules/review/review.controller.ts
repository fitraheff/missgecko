import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
  NotFoundException,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { ReviewEntity } from './entities/review.entity';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import {
  ApiTags,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiBearerAuth,
  ApiConsumes,
} from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
// import { Role } from '@prisma/client';
// import { Roles } from '../../common/decorators/roles.decorator';
// import { RolesGuard } from '../../common/guards/roles.guard';

@Controller('review')
@ApiTags('Review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ReviewEntity })
  @UseInterceptors(FileInterceptor('photo'))
  @ApiConsumes('multipart/form-data')
  @Post()
  async create(
    @Body() createReviewDto: CreateReviewDto,
    @Req() req: any,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return new ReviewEntity(
      await this.reviewService.create(createReviewDto, req.user.id, file),
    );
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: [ReviewEntity] })
  @Get()
  async findAll() {
    const reviews = await this.reviewService.findAll();
    return reviews.map((review) => new ReviewEntity(review));
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ReviewEntity })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const review = await this.reviewService.findOne(id);

    if (!review) {
      throw new NotFoundException(`Review with id ${id} not found`);
    }
    return new ReviewEntity(review);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ReviewEntity })
  @UseInterceptors(FileInterceptor('photo'))
  @ApiConsumes('multipart/form-data')
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateReviewDto: UpdateReviewDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return new ReviewEntity(
      await this.reviewService.update(id, updateReviewDto, file),
    );
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ReviewEntity })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new ReviewEntity(await this.reviewService.remove(id));
  }
}
