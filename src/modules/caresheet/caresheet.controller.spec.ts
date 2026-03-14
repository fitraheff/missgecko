import { Test, TestingModule } from '@nestjs/testing';
import { CaresheetController } from './caresheet.controller';
import { CaresheetService } from './caresheet.service';

describe('CaresheetController', () => {
  let controller: CaresheetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaresheetController],
      providers: [CaresheetService],
    }).compile();

    controller = module.get<CaresheetController>(CaresheetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
