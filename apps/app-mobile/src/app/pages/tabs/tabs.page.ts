import { Component } from '@angular/core';

@Component({
  selector: 'prueba-monorepo-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {

  public ticketTab: string;
  public budgetsTab: string;
  public earningsTab: string;
  public profileTab: string;

  constructor() {
    this.ticketTab = 'ticket-outline';
    this.budgetsTab = 'receipt-sharp';
    this.earningsTab = 'cash-outline';
    this.profileTab = 'person-outline'
  }

  public changeTicketIcon(tab: string){
    this.ticketTab = tab;
    this.budgetsTab = 'receipt-outline';
    this.earningsTab = 'cash-outline';
    this.profileTab = 'person-outline'
  }

  public changeBudgetsIcon(tab: string){
    this.ticketTab = 'ticket-outline';
    this.budgetsTab = tab;
    this.earningsTab = 'cash-outline';
    this.profileTab = 'person-outline'
  }

  public changeEarningsIcon(tab: string){
    this.ticketTab = 'ticket-outline';
    this.budgetsTab = 'receipt-outline';
    this.earningsTab = tab;
    this.profileTab = 'person-outline'
  }

  public changeProfileIcon(tab: string){
    this.ticketTab = 'ticket-outline';
    this.budgetsTab = 'receipt-outline';
    this.earningsTab = 'cash-outline';
    this.profileTab = tab
  }
}
