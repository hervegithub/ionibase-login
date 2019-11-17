import { LoginPage } from './../login/login';
import { ChartdataProvider } from './../../providers/chartdata/chartdata';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-register2',
  templateUrl: 'register2.html',
})
export class Register2Page {

  name:string;
  pseudo:string
  email:string;
  password:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private chartData: ChartdataProvider) {
    this.name=this.navParams.get("name");
    this.pseudo=this.navParams.get("pseudo");
  }

  register(){
    this.chartData.signUp(this.email,this.password).then((uid)=>{
      this.chartData.register(this.name,this.pseudo,uid).then(()=>{
        this.navCtrl.push(LoginPage);
      });
    }).catch((err)=>{
      console.log(err);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register2Page');
  }

}
