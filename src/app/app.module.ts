import { RegisterPage } from './../pages/register/register';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Register2Page } from '../pages/register2/register2';
import { ChartdataProvider } from '../providers/chartdata/chartdata';
import * as firebase from "firebase";
let firebaseConfig = {
  apiKey: "AIzaSyAb2utzw0GSkK0Om8v_boSx6NKkZT0zFwg",
  authDomain: "ionibase-55ee5.firebaseapp.com",
  databaseURL: "https://ionibase-55ee5.firebaseio.com",
  projectId: "ionibase-55ee5",
  storageBucket: "ionibase-55ee5.appspot.com",
  messagingSenderId: "396328626229",
  appId: "1:396328626229:web:a45e19d6213a89dce4697c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    Register2Page,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    Register2Page,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ChartdataProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChartdataProvider
  ]
})
export class AppModule {}
