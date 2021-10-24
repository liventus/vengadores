import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { NavComponent } from './component/nav/nav.component';
import { GaleryComponent } from './component/galery/galery.component';
import { FormComponent } from './component/form/form.component';
import { FootComponent } from './component/foot/foot.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './module/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroService } from './servicios/registro.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    GaleryComponent,
    FormComponent,
    FootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [RegistroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
