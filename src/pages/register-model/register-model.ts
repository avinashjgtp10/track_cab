import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the RegisterModelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-model',
  templateUrl: 'register-model.html',
})
export class RegisterModelPage {

  userDetails = {
    userType: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNumber: "",
    city: "",
    gender: ""
  }
  mobileNum = "";

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    private storage: Storage,
    public navParams: NavParams) {
    this.storage.get("userData").then(data => {
      console.log("email is is:" + data.email);
      this.mobileNum = data.mobileNumber;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterModelPage');
  }

  user(value) {
    this.userDetails.userType = value;
  }
  getGender(gender) {
    this.userDetails.gender = gender;
  }

  register() {

    if (this.mobileNum == this.userDetails.mobileNumber) {
      let toast = this.toastCtrl.create({
        message: 'Mobile number already exist!',
        duration: 3000
      });
      toast.present();
    }
    else {
      this.storage.set("userData", this.userDetails).then(
        data => {
          const toast = this.toastCtrl.create({
            message: 'User was added successfully',
            duration: 3000
          });
          toast.present();
          this.navCtrl.popToRoot();
        },
        err => {
          console.log("Error");
        }
      );
    }
  }

}
