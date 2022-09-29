import { Component, Input, OnInit } from '@angular/core';
import { Budget } from '@prueba-monorepo/models';
import * as moment from 'moment';
@Component({
  selector: 'prueba-monorepo-budget-card',
  templateUrl: './budget-card.component.html',
  styleUrls: ['./budget-card.component.scss'],
})
export class BudgetCardComponent implements OnInit {

  @Input() budget!: Budget;
  public price: string;
  public time: string;
  public date: string;
  constructor() {
    this.price = '';
    this.time = '';
    this.date = '';
  }

  ngOnInit(): void {
    this.showPrice();
    this.showDate();
  }

  public showPrice(){
    const newFormat = new Intl.NumberFormat("es-CL", { currency: "CLP", style: "currency" })
    this.price = newFormat.format(this.budget.price);
  }
  public showDate(){
    this.date = moment(this.budget.date).subtract(10, 'days').calendar();
    this.time = moment(this.budget.date).format('LT');
  }

}
