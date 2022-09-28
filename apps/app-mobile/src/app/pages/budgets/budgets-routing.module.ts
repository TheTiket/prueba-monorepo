import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetsPage } from './budgets.page';

const routes: Routes = [
  {
    path: '',
    component: BudgetsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudgetsPageRoutingModule {}
