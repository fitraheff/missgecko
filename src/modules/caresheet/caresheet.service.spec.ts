import { Test, TestingModule } from '@nestjs/testing';
import { CaresheetService } from './caresheet.service';

describe('CaresheetService', () => {
  let service: CaresheetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CaresheetService],
    }).compile();

    service = module.get<CaresheetService>(CaresheetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
