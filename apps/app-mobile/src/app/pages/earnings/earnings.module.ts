import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EarningsPage } from './earnings.page';
import { EarningsPageRoutingModule } from './earnings-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    EarningsPageRoutingModule
  ],
  declarations: [EarningsPage],
})
export class EarningsPageModule {}
