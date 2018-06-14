import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginModelPage } from './login-model';

@NgModule({
  declarations: [
    LoginModelPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginModelPage),
  ],
})
export class LoginModelPageModule {}
