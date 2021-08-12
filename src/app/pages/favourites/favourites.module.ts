import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavouritesPageRoutingModule } from './favourites-routing.module';

import { FavouritesPage } from './favourites.page';
import { CommonsModule } from '../../commons/commons.module';

@NgModule({
  imports: [
    CommonModule,
    , FormsModule,
    , IonicModule,
    , FavouritesPageRoutingModule
    , CommonsModule
  ],
  declarations: [FavouritesPage]
})
export class FavouritesPageModule {}
