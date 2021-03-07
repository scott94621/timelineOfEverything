import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from '../app/overview/overview.component';
import { CreateWindowComponent } from './create-window/create-window.component';

const routes: Routes = [
  {path: 'overview', component: OverviewComponent},
  {path: 'create', component: CreateWindowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
