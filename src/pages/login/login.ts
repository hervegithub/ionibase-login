import { ChartdataProvider } from './../../providers/chartdata/chartdata';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email:string;
  password:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private datashare:ChartdataProvider,public toastCtrl: ToastController) {
  }

  onSignIn(){
    this.datashare.signIn(this.email,this.password).then((uid)=>{
      this.presentToast(uid);
    }).catch((err)=>{
      console.log(err);
    })
  }

  presentToast(uid:any) {
    const toast = this.toastCtrl.create({
      message: 'User '+uid+" is logging",
      duration: 3000
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
