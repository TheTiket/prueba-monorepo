import { Module } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetController } from './budget.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BudgetSchema } from './schemas/budgets.schema';
import { BudgetGateway } from './budget.gateway';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Budget', schema: BudgetSchema }]),
  ],
  controllers: [BudgetController],
  providers: [BudgetGateway, BudgetService],
})
export class BudgetModule {}
