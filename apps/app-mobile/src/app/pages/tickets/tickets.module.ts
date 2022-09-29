import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketsPage } from './tickets.page';
import { TicketsPageRoutingModule } from './tickets-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TicketsPageRoutingModule,
  ],
  declarations: [TicketsPage],
})
export class TicketsPageModule {}
