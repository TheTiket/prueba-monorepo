import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'prueba-monorepo-budget-card',
  templateUrl: './budget-card.component.html',
  styleUrls: ['./budget-card.component.scss'],
})
export class BudgetCardComponent implements OnInit {

  @Input() budget: any;
  public price: string;

  constructor() {
    this.price = ''
  }

  ngOnInit(): void {
    this.showPrice();
  }

  public showPrice(){
    const newFormat = new Intl.NumberFormat("es-CL", { currency: "CLP", style: "currency" })
    //const newFormat = new Intl.NumberFormat("es-AR", { currency: "ARS", style: "currency" })
    this.price = newFormat.format(this.budget.price);
  }
}
