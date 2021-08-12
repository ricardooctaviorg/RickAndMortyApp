import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  titleDetail       : string = "";

  @Output() titleDetailEmitter     : EventEmitter<any> = new EventEmitter();

  constructor() { }

  sendTitleDetail(titleDetail: any) {
    this.titleDetail = titleDetail;
    this.titleDetailEmitter.emit(this.titleDetail);
  }


}
