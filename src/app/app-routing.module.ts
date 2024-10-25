import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrecioInternacionalComponent } from './components/precio-internacional/precio-internacional.component';

const routes: Routes = [
  { path: '', redirectTo: '/internacional', pathMatch: 'full' },  // Ruta predeterminada
  { path: 'internacional', component: PrecioInternacionalComponent },
  { path: '**', redirectTo: '/internacional' }  // Manejo de rutas no válidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
