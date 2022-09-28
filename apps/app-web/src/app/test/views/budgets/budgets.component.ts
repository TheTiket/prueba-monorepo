import { Component, OnInit } from '@angular/core';
import { BudgetService } from '@prueba-monorepo/services';

@Component({
  selector: 'prueba-monorepo-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.scss'],
})
export class BudgetsComponent implements OnInit {

  public budgets = [];

  constructor(
    private budgetService: BudgetService,
  ) {

    /* this.budgets = [
      {id: 1, name:'Carlos Torres', price: 125000},
      {id: 2, name:'Fransisco Peña', price: 135000},
      {id: 3, name:'Pedro González', price: 100000},
      {id: 4, name:'José Pinto', price: 127000},
      {id: 5, name:'Fabian Gutiérrez', price: 125000},
      {id: 6, name:'Patricio Castro', price: 158000}
    ]; */
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
