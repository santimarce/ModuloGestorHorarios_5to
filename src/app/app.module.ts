import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ViewsModule } from './views/views.module';
import { ComponentsModule } from './components/components.module';
import { PasswordinputComponent } from './components/basics/passwordinput/passwordinput.component';
import { FormestudiantesinComponent } from './components/forms/formestudiantesin/formestudiantesin.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule // Agrega esta línea para importar MatIconModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync('noop'),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }