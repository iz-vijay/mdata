import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Intro page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class Intro {

	slides = [
    {
      title: "Sign up Successfully.",
      description: "Explore some of the functions.",
      image: "assets/images/slidebox_0.png",
    },
    {
      title: "Schedule",
      description: "Check your care receivers' shedule anywhere at any time.",
      image: "assets/images/slidebox_1.png",
    },
    {
      title: "Pharmacy",
      description: "This is where you can check your care recivers' shedule.",
      image: "assets/images/slidebox_2.png",
    }
  ];


  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Intro Page');
  }

}
