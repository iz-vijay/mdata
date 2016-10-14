import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Tablets } from '../tablets/tablets';

/*
  Generated class for the MedicationDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-medication-details',
  templateUrl: 'medication-details.html'
})
export class MedicationDetails {
		tablets = Tablets; 

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello MedicationDetails Page');
  }

}
