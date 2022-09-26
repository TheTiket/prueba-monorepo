import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  NotFoundException,
  Res,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { BudgetService } from './budget.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';

@Controller('budget')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Post()
  async createBudgets(
    @Res() res,
    @Body() createBudgetsDTO: CreateBudgetDto,
  ) {
    const budgets = await this.budgetService.createBudget(
      createBudgetsDTO,
    );
    return res.status(HttpStatus.OK).json({
      message: 'Budgets Successfully Created',
      budgets,
    });
  }


  @Get()
  async getBudgets(@Res() res) {
    const budgets = await this.budgetService.getBudgets();
    return res.status(HttpStatus.OK).json(budgets);
  }


  @Get('/:id')
  async getBudget(@Res() res, @Param('id') id) {
    const budgets = await this.budgetService.getBudget(id);
    if (!budgets)
      throw new NotFoundException('Budgets does not exist!');
    return res.status(HttpStatus.OK).json(budgets);
  }


  @Delete('/:id')
  async deleteBudget(@Res() res, @Param('id') id) {
    const budgets = await this.budgetService.deleteBudget(id);
    if (!budgets)
      throw new NotFoundException('Budgets does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Budgets Deleted Successfully',
      budgets,
    });
  }


  @Put('/:id')
  async updateBudget(
    @Res() res,
    @Body() updateBudgetsDTO: UpdateBudgetDto,
    @Param('id') id,
  ) {
    const budgets = await this.budgetService.updateBudget(
      id,
      updateBudgetsDTO,
    );
    if (!budgets)
      throw new NotFoundException('Budgets does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Budgets Updated Successfully',
      budgets,
    });
  }
}
