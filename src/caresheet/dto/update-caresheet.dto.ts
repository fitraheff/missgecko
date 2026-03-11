import { PartialType } from '@nestjs/swagger';
import { CreateCaresheetDto } from './create-caresheet.dto';

export class UpdateCaresheetDto extends PartialType(CreateCaresheetDto) {}
