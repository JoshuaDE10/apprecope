import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { PrecioInternacionalComponent } from './components/precio-internacional/precio-internacional.component'; 

@NgModule({
  declarations: [AppComponent,PrecioInternacionalComponent],
  imports: [BrowserModule,AppRoutingModule],
  providers: [provideHttpClient()], 
  bootstrap: [AppComponent]
})
export class AppModule {}
