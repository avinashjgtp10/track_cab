import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { PoolCabPage } from "../pages/pool-cab/pool-cab"
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

  flag = false;
  username = "";
  password = "";

  constructor(public navCtrl: NavController,
    private storage: Storage,
    public toastCtrl: ToastController,
    private viewCtrl: ViewController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginModelPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }


  login() {
    console.log(this.username + " " + this.password);

    this.storage.get("userData").then((val) => {
      console.log(val);
      if (val.mobileNumber == this.username && val.password == this.password) {
        this.flag = true;
        this.storage.set("flag", this.flag).then(success => {
          this.navCtrl.setRoot(PoolCabPage);
        },
          Error => {
            console.log("error in data storage");
          }
        );

      }
      else {
        const toast = this.toastCtrl.create({
          message: 'Invalid Username or Password',
          duration: 3000
        });
        toast.present();
      }
    })
  }

}
