import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

import { ToastController } from '@ionic/angular';
import { MenuOpt } from '../enums/menu-opt';


const PATH_MAINMENU_OPTIONS       = "/assets/json/mainMenu.json";

//const TOAST_ICON_SUCCESS_TRUE     = CommonDeliveryIcon.SUCCESS_TRUE.toString();
//const TOAST_ICON_SUCCESS_FALSE    = CommonDeliveryIcon.SUCCESS_FASE.toString();

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

  

}
