import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

import { ToastController } from '@ionic/angular';
import { MenuOpt } from '../interfaces/menu-opt';
import { CommonCharacterIcon } from '../enums/common-character-icon.enum';
import { StatusCharacterIcon } from '../enums/status-character-icon.enum';


const PATH_MAINMENU_OPTIONS       = "/assets/json/mainMenu.json";

const TOAST_ICON_SUCCESS_TRUE     = CommonCharacterIcon.SUCCESS_TRUE.toString();
const TOAST_ICON_SUCCESS_FALSE    = CommonCharacterIcon.SUCCESS_FASE.toString();

const TOAST_DURATION              = 5000;
const TOAST_TRANSLUCENT           = false;
const TOAST_POSITION              = "bottom";
const TOAST_COLOR_SUCCESS_TRUE    = "tertiary";
const TOAST_COLOR_SUCCESS_FALSE   = "danger";
const TOAST_KEYBOARD_CLOSE        = false;

const GATEWAY_VALUE               = environment.gateway;


@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private httpClient    : HttpClient
    , public toastController        : ToastController) { }

  public getMainMunuOptions(){
    return this.httpClient.get<MenuOpt[]>(PATH_MAINMENU_OPTIONS);
  }

  async showChangeFav(fav: Boolean, name: string) {

    var messageCurrent  : string = "";
    var typeAlert       : string = TOAST_COLOR_SUCCESS_FALSE;
    var iconToast       : string = TOAST_ICON_SUCCESS_FALSE;

    switch (fav) {
        case true:
          messageCurrent  = "It has been added to favorites to " + name;
          iconToast       = "happy";
          typeAlert       = TOAST_COLOR_SUCCESS_TRUE;
          break;
        case false:
            messageCurrent  = name + " has been removed from favorites. ";
            iconToast       = "sad";
            typeAlert       = TOAST_COLOR_SUCCESS_FALSE;
          break;
      }

    const toast = await this.toastController.create({
      message         : messageCurrent
      , duration      : TOAST_DURATION
      , color         : typeAlert
      , keyboardClose : TOAST_KEYBOARD_CLOSE
      , position      : TOAST_POSITION
      , translucent   : TOAST_TRANSLUCENT
      , buttons       : [
        {
          side: 'start',
          icon: iconToast,
        },{
          side: 'end',
          text: 'CLOSE',
          role: 'cancel',
          handler: () => {
            console.log('Close clicked');
          }
        }
      ]
    });
    await toast.present();
  }

  

}
