import { PartialType } from '@nestjs/swagger';
import { CreateGeckoDto } from './create-gecko.dto';

export class UpdateGeckoDto extends PartialType(CreateGeckoDto) {}
