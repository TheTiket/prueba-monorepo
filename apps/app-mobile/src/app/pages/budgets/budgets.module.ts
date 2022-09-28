import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BudgetsPage } from './budgets.page';
import { BudgetsPageRoutingModule } from './budgets-routing.module';
import { BudgetCardComponent } from '../../component/budget-card/budget-card.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    BudgetsPageRoutingModule,
  ],
  declarations: [BudgetsPage, BudgetCardComponent],
})
export class BudgetsPageModule {}
