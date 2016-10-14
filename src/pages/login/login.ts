import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ForgotPassword } from '../forgot-password/forgot-password';
import { Oppill } from '../oppill/oppill';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
  forgot = ForgotPassword;
  oppill = Oppill;
  
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Login Page');
  }

}
