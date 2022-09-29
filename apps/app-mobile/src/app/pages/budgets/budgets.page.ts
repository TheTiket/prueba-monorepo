import { Component, OnInit } from '@angular/core';
import { Budget } from '@prueba-monorepo/models';
import { BudgetService } from '@prueba-monorepo/services';

@Component({
  selector: 'prueba-monorepo-budgets',
  templateUrl: 'budgets.page.html',
  styleUrls: ['budgets.page.scss'],
})
export class BudgetsPage implements OnInit{
  public budgets: Budget[];
  public segmentSelected: string | undefined;
  public segments: string[];
  constructor(
    private budgetService: BudgetService,
  ) {
    this.budgets = []
    this.segmentSelected = 'onHold';
    this.segments = ['onHold','accepted','refused'];
  }
  ngOnInit(): void {
    this.fetchBudgets();
  }

  async fetchBudgets(){
    try {
      const response: any = await this.budgetService.getAllBudgets().toPromise();
      this.budgets = response
      console.log(this.budgets)
    }
    catch (error) {
      console.log('Algo ha salido mal');
    }
  }

  public segmentChange(ev: any) {
    this.segmentSelected = this.segments.find(segment => segment === ev.target.value);
  }
}
