import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../../../commons/services/storage.service';
import { Character } from '../../../commons/interfaces/character';
import { MessageService } from '../../../commons/services/message.service';

const TITLE = "Origin";

@Component({
  selector: 'app-detail-origin',
  templateUrl: './detail-origin.component.html',
  styleUrls: ['./detail-origin.component.scss'],
})
export class DetailOriginComponent implements OnInit {

  character : Character;

  constructor(private storageService  : StorageService
    , private messageService          : MessageService
    , private route                   : ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        let idCharacter: string = String(params.get("id"));
        idCharacter = idCharacter.replace(',','');
        console.log("idCharacter", idCharacter);
        this.character                            = this.storageService.getCharacterById(idCharacter);
        this.messageService.sendTitleDetail(TITLE);
      }
    );
  }

}
