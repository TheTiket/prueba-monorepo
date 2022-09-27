import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { Budget, BudgetDocument} from './schemas/budgets.schema';

@Injectable()
export class BudgetService {
  constructor(
    @InjectModel(Budget.name) private budgetsModel: Model<BudgetDocument>,
    ) {}


    async createBudget(
      createBudgetDTO: CreateBudgetDto,
    ): Promise<Budget> {
      const newBudget = new this.budgetsModel(createBudgetDTO);
      return newBudget.save();
    }

    async getBudgets(): Promise<Budget[]> {
      const budgets = await this.budgetsModel.find();
      return budgets;
    }

    async getBudget(id: string): Promise<Budget> {
      const budgets = await this.budgetsModel.findById(id);
      return budgets;
    }

    async deleteBudget(id: string): Promise<any> {
      const budgets = await this.budgetsModel.findByIdAndDelete(id);
      return budgets;
    }

    async updateBudget(
      id: string,
      updateBudgetDTO: UpdateBudgetDto,
    ): Promise<Budget> {
      const updatedBudget = await this.budgetsModel
        .findByIdAndUpdate(id, { $set: updateBudgetDTO }, { new: true })
        .exec();
      return updatedBudget;
    }
}
