import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { BudgetsComponent } from './views/budgets/budgets.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BudgetCardComponent } from './components/budget-card/budget-card.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [BudgetsComponent, NavbarComponent, BudgetCardComponent],
  imports: [CommonModule, TestRoutingModule, MaterialModule],
})
export class TestModule {}
