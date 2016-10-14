import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Medictation } from '../medictation/medictation';


/*
  Generated class for the Oppill page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-oppill',
  templateUrl: 'oppill.html'
})
export class Oppill {
		      medictation = Medictation;
		
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Oppill Page');
  }

}
