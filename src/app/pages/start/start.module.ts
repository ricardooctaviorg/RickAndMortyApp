import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartPageRoutingModule } from './start-routing.module';

import { StartPage } from './start.page';
import { CommonsModule } from '../../commons/commons.module';

@NgModule({
  imports: [
    CommonModule
    , FormsModule
    , IonicModule
    , StartPageRoutingModule
    , CommonsModule
  ],
  declarations: [StartPage]
})
export class StartPageModule {}
