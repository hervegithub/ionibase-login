import { RegisterPage } from './../register/register';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onLoginPage(){
    this.navCtrl.push(LoginPage);
  }

  onRegisterPage(){
    this.navCtrl.push(RegisterPage);
  }

}
