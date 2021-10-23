import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { NavComponent } from './component/nav/nav.component';
import { GaleryComponent } from './component/galery/galery.component';
import { FormComponent } from './component/form/form.component';
import { FootComponent } from './component/foot/foot.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
