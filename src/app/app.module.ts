import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { Signup } from '../pages/signup/signup';
import { Login } from '../pages/login/login';
import { ForgotPassword } from '../pages/forgot-password/forgot-password';
import { Intro } from '../pages/intro/intro';
import { Oppill } from '../pages/oppill/oppill';
import { Medictation } from '../pages/medictation/medictation';
import { MedicationDetails } from '../pages/medication-details/medication-details';
import { Tablets } from '../pages/tablets/tablets';





@NgModule({
  declarations: [
    MyApp,
    Home,
    Signup,
    Login,
    ForgotPassword,
    Intro,
    Oppill,
    Medictation,
    MedicationDetails,
    Tablets
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Signup,
    Login,
    ForgotPassword,
    Intro,
    Oppill,
    Medictation,
    MedicationDetails,
    Tablets
  ],
  providers: []
})
export class AppModule {}
