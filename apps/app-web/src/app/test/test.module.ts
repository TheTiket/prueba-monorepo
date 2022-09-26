import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { BudgetsComponent } from './views/budgets/budgets.component';

@NgModule({
  declarations: [BudgetsComponent],
  imports: [CommonModule, TestRoutingModule],
})
export class TestModule {}
