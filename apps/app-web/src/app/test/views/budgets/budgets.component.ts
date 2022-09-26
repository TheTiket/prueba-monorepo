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
      {id: 1, name:'Juan'},
      {id: 2, name:'Pedro'},
      {id: 3, name:'Maria'},
      {id: 4, name:'Diego'},
      {id: 5, name:'Marta'},
      {id: 6, name:'Camila'}
    ]; 
  }

  ngOnInit(): void {}
}
