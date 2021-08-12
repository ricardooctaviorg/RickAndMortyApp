import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../../../commons/services/storage.service';
import { MessageService } from '../../../commons/services/message.service';
import { Character } from '../../../commons/interfaces/character';

const TITLE = "Episodes";

@Component({
  selector: 'app-detail-episodes',
  templateUrl: './detail-episodes.component.html',
  styleUrls: ['./detail-episodes.component.scss'],
})
export class DetailEpisodesComponent implements OnInit {

  character : Character;

  constructor(private storageService  : StorageService
    , private route                   : ActivatedRoute
    , private messageService          : MessageService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(
      params => {
        let idCharacter: string = String(params.get("id"));
        idCharacter = idCharacter.replace(',','');
        console.log("idCharacter", idCharacter);
        //this.character                            = this.storageService.getCharacterById(idCharacter);
        this.messageService.sendTitleDetail(TITLE);
      }
    );

  }

}
