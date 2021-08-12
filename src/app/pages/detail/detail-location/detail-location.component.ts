import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../../commons/interfaces/character';
import { StorageService } from '../../../commons/services/storage.service';
import { MessageService } from '../../../commons/services/message.service';

const TITLE = "Location";

@Component({
  selector: 'app-detail-location',
  templateUrl: './detail-location.component.html',
  styleUrls: ['./detail-location.component.scss'],
})
export class DetailLocationComponent implements OnInit {

  character : Character;

  constructor(private storageService  : StorageService
    , private route                   : ActivatedRoute
    , private messageService          : MessageService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        let idCharacter: string = String(params.get("id"));
        idCharacter = idCharacter.replace(',','');
        this.character  = this.storageService.getCharacterById(idCharacter);
        this.messageService.sendTitleDetail(TITLE);
      }
    );
  }

}
