import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    HeaderMenuComponent
    , HeaderComponent
  ],
  imports: [
    CommonModule
    , IonicModule
  ],exports:[
    HeaderMenuComponent
    , HeaderComponent
  ]
})
export class CommonsModule { }
