import { Test, TestingModule } from '@nestjs/testing';
import { GeckoController } from './gecko.controller';
import { GeckoService } from './gecko.service';

describe('GeckoController', () => {
  let controller: GeckoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeckoController],
      providers: [GeckoService],
    }).compile();

    controller = module.get<GeckoController>(GeckoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
