import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';



@NgModule({
  declarations: [
    HeaderMenuComponent
  ],
  imports: [
    CommonModule
    , IonicModule
  ],exports:[
    HeaderMenuComponent
  ]
})
export class CommonsModule { }
