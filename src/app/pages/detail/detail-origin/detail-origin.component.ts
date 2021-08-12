import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../../../commons/services/storage.service';
import { Character } from '../../../commons/interfaces/character';
import { MessageService } from '../../../commons/services/message.service';
import { CharacterService } from '../../../services/character.service';
import { OriginLocation } from '../../../commons/interfaces/origin-location';

const TITLE   = "Origin";

const UNKNOWN = "unknown";

@Component({
  selector: 'app-detail-origin',
  templateUrl: './detail-origin.component.html',
  styleUrls: ['./detail-origin.component.scss'],
})
export class DetailOriginComponent implements OnInit {

  character       : Character;
  originLocation  : OriginLocation  = {};
  isUnknown       : Boolean         = true;

  constructor(private storageService  : StorageService
    , private messageService          : MessageService
    , private route                   : ActivatedRoute
    , private characterService        : CharacterService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      async params => {
        let idCharacter: string = String(params.get("id"));
        idCharacter = idCharacter.replace(',','');
        this.character = this.storageService.getCharacterById(idCharacter);
        this.messageService.sendTitleDetail(TITLE);
        if( this.character.origin.name !== UNKNOWN ){
          this.characterService.getLocation(this.character.origin.url).subscribe(
            data =>{
              this.originLocation = data as OriginLocation;
              this.isUnknown      = false;
            }
          );
        }
      }
    );
  }

}
