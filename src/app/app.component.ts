import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { Home } from '../pages/home/home';
import { Signup } from '../pages/signup/signup';
import { Login } from '../pages/login/login';
import { ForgotPassword } from '../pages/forgot-password/forgot-password';
import { Intro } from '../pages/intro/intro';
import { Oppill } from '../pages/oppill/oppill';
import { Medictation } from '../pages/medictation/medictation';
import { MedicationDetails } from '../pages/medication-details/medication-details';
import { Tablets } from '../pages/tablets/tablets';







@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Home;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: Home },
      { title: 'Signup', component: Signup },
      { title: 'Login', component: Login },
      { title: 'ForgotPassword', component: ForgotPassword },
      { title: 'Intro', component: Intro },
      {title: 'Oppill', component: Oppill },
      {title: 'Medictation', component: Medictation },
      {title: 'MedicationDetails', component: MedicationDetails },
      {title: 'Tablets', component: Tablets }  
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
