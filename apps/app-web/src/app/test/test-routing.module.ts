import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetsComponent } from './views/budgets/budgets.component';

const routes: Routes = [
  {
    path: 'budgets',
    component: BudgetsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
