import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterModelPage } from './register-model';

@NgModule({
  declarations: [
    RegisterModelPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterModelPage),
  ],
})
export class RegisterModelPageModule {}
