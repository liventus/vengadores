import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/interfaces/login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pymeform= new FormGroup({
    dni:new FormControl('',Validators.required),
    telefono:new FormControl('',Validators.required),
    correo:new FormControl (''),
  })

  constructor(fb:FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.pymeform.value)
  }
  

}
