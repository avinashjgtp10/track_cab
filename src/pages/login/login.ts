import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ModalController } from 'ionic-angular';
import { LoginModelPage } from '../../model/login-model';
import { RegisterModelPage } from '../register-model/register-model';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  login() {
    let model = this.modalCtrl.create(LoginModelPage);
    model.present();
  }

  register() {
    this.navCtrl.push(RegisterModelPage);
  }

}
