import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainwebsiteComponent } from './mainwebsite/mainwebsite.component';

const routes: Routes = [
  {
    component: MainwebsiteComponent,
    path: "mainwebsite"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
