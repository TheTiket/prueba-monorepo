import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EarningsPage } from './earnings.page';

const routes: Routes = [
  {
    path: '',
    component: EarningsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EarningsPageRoutingModule {}
