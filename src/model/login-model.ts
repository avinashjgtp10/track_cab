import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the LoginModelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-model',
  templateUrl: 'login-model.html',
})
export class LoginModelPage {

  constructor(public navCtrl: NavController,
              private viewCtrl:ViewController,
               public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginModelPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
