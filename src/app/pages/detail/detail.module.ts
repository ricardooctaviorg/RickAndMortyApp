import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPageRoutingModule } from './detail-routing.module';

import { DetailPage } from './detail.page';
import { CommonsModule } from '../../commons/commons.module';
import { DetailOriginComponent } from './detail-origin/detail-origin.component';
import { DetailLocationComponent } from './detail-location/detail-location.component';
import { DetailEpisodesComponent } from './detail-episodes/detail-episodes.component';

@NgModule({
  imports: [
    CommonModule
    , FormsModule
    , IonicModule
    , DetailPageRoutingModule
    , CommonsModule
  ],
  declarations: [DetailPage
  , DetailOriginComponent
  , DetailLocationComponent
  , DetailEpisodesComponent]
})
export class DetailPageModule {}
