import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrecioInternacionalComponent } from './components/precio-internacional/precio-internacional.component';

const routes: Routes = [

  {path: 'internacional',component: PrecioInternacionalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
