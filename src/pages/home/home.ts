import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Login} from '../login/login';
import {Signup} from '../signup/signup';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {
  login = Login;
  signup = Signup;
  constructor(public navCtrl: NavController) {
    
  }

}
