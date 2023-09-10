import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProyectsComponent } from './proyects/proyects.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects', component: ProyectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
