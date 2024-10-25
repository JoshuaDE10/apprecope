import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrecioInternacionalComponent } from './components/precio-internacional/precio-internacional.component'; 

@NgModule({
  declarations: [AppComponent, PrecioInternacionalComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule], // Agregar HttpClientModule aquí
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
