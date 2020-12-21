import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  loginstring:string = '';
  password:string = ''
    
  
   
  constructor() { }

  ngOnInit(): void {
  }
   onLogin(log: any,pass: any ){

    if (localStorage.getItem('@L'+log)) {
      if (localStorage.getItem('@L'+log)===pass)
      {
        alert("Пользователь подключён")
      } else {alert("Пароль не верен")}
    }
     else {
      localStorage.setItem('@L'+log,pass)
      alert("Пользователь зарегистрирован")
     }
      
  }

}