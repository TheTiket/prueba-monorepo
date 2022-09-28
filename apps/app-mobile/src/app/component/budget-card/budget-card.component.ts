import { Component, Input, OnInit } from '@angular/core';
import { Budget } from '@prueba-monorepo/models';

@Component({
  selector: 'prueba-monorepo-budget-card',
  templateUrl: './budget-card.component.html',
  styleUrls: ['./budget-card.component.scss'],
})
export class BudgetCardComponent implements OnInit {
  @Input() budget! :Budget
  constructor() {}

  ngOnInit(): void {}
}
