import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the HealthCare page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'health-care',
  templateUrl: 'health-care.html'
})
export class HealthCare {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello HealthCare Page');
  }

}
