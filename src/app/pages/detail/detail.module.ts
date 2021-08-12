import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPageRoutingModule } from './detail-routing.module';

import { DetailPage } from './detail.page';
import { CommonsModule } from '../../commons/commons.module';

@NgModule({
  imports: [
    CommonModule
    , FormsModule
    , IonicModule
    , DetailPageRoutingModule
    , CommonsModule
  ],
  declarations: [DetailPage]
})
export class DetailPageModule {}
