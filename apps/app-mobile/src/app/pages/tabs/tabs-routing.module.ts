import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tickets',
        loadChildren: () =>
          import('../tickets/tickets.module').then((m) => m.TicketsPageModule),
      },
      {
        path: 'budgets',
        loadChildren: () =>
          import('../budgets/budgets.module').then((m) => m.BudgetsPageModule),
      },
      {
        path: 'earnings',
        loadChildren: () =>
          import('../earnings/earnings.module').then((m) => m.EarningsPageModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../profile/profile.module').then((m) => m.ProfilePageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/budgets',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/tabs/budgets',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
