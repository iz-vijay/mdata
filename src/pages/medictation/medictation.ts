import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MedicationDetails } from '../medication-details/medication-details';

/*
  Generated class for the Medictation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-medictation',
  templateUrl: 'medictation.html'
})
export class Medictation {
		medicationdetails = MedicationDetails;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Medictation Page');
  }

}
