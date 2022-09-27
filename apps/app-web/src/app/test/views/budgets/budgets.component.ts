import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prueba-monorepo-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.scss'],
})
export class BudgetsComponent implements OnInit {

  public budgets;

  constructor() {
    this.budgets = [
      {id: 1, name:'Carlos Torres', price: 125000},
      {id: 2, name:'Fransisco Peña', price: 135000},
      {id: 3, name:'Pedro González', price: 100000},
      {id: 4, name:'José Pinto', price: 127000},
      {id: 5, name:'Fabian Gutiérrez', price: 125000},
      {id: 6, name:'Patricio Castro', price: 158000}
    ]; 
  }

  ngOnInit(): void {}
}
