import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app-web/budgets',
    pathMatch: 'full'
  },
  {
    path: 'app-web',
    loadChildren: () => import('./test/test.module')
      .then(m => m.TestModule)
  },
  {
    path: '**',
    redirectTo: 'app-web/budgets'
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
