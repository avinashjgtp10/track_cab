import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoolCabPage } from './pool-cab';

@NgModule({
  declarations: [
    PoolCabPage,
  ],
  imports: [
    IonicPageModule.forChild(PoolCabPage),
  ],
})
export class PoolCabPageModule {}
