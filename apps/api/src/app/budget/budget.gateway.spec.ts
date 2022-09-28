import { Test, TestingModule } from '@nestjs/testing';
import { BudgetGateway } from './budget.gateway';

describe('BudgetGateway', () => {
  let gateway: BudgetGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BudgetGateway],
    }).compile();

    gateway = module.get<BudgetGateway>(BudgetGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
