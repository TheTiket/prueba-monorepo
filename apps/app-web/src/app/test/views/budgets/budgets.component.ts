import { Component, OnInit } from '@angular/core';
import { Budget } from '@prueba-monorepo/models';
import { BudgetService } from '@prueba-monorepo/services';

@Component({
  selector: 'prueba-monorepo-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.scss'],
})
export class BudgetsComponent implements OnInit {

  public budgets: Budget[] = [];

  constructor(
    private budgetService: BudgetService,
  ) {

  }
  ngOnInit(): void {
    this.fetchBudgets();
  }

  async fetchBudgets(){
    try {
      const response: any = await this.budgetService.getAllBudgets().toPromise();
      this.budgets = response
    }
    catch (error) {
      console.log('Algo ha salido mal');
    }
  }
}
