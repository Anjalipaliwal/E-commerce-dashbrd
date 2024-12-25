import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardECommerceComponent } from './dashboard/dashboard-e-commerce/dashboard-e-commerce.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardECommerceComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 