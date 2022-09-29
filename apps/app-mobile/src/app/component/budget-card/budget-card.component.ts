import { Component, Input, OnInit } from '@angular/core';
import { Budget } from '@prueba-monorepo/models';
import * as moment from 'moment';

@Component({
  selector: 'prueba-monorepo-budget-card',
  templateUrl: './budget-card.component.html',
  styleUrls: ['./budget-card.component.scss'],
})
export class BudgetCardComponent implements OnInit {
  @Input() budget! :Budget
  public date: string;
  constructor() {
    this.date = '';
  }

  ngOnInit(): void {
    this.showDate();
  }
  public showDate(){
    this.date = moment(this.budget.date).subtract(10, 'days').calendar();
  }
}
