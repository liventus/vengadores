import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleryComponent } from './component/galery/galery.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path:'home', component:GaleryComponent},
  {path:'login', component:LoginComponent },
  {path: '', redirectTo:'home', pathMatch: 'full'},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
