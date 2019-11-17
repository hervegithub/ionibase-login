import { Register2Page } from './../register2/register2';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  isExist=false;
  name:string;
  pseudo:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onSecondePage(){
    this.navCtrl.push(Register2Page, {'name':this.name, 'pseudo':this.pseudo});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
