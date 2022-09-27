import { Module } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetController } from './budget.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BudgetSchema } from './schemas/budgets.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name: 'Budget', schema: BudgetSchema}
    ])
  ],
  controllers: [BudgetController],
  providers: [BudgetService],
})
export class BudgetModule {}
