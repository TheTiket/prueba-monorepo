import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BudgetsPage } from './budgets.page';
import { BudgetsPageRoutingModule } from './budgets-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    BudgetsPageRoutingModule,
  ],
  declarations: [BudgetsPage],
})
export class BudgetsPageModule {}
