import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../../commons/interfaces/character';
import { StorageService } from '../../../commons/services/storage.service';
import { MessageService } from '../../../commons/services/message.service';
import { CharacterService } from '../../../services/character.service';
import { OriginLocation } from '../../../commons/interfaces/origin-location';

const TITLE   = "Location";
const UNKNOWN = "unknown";

@Component({
  selector: 'app-detail-location',
  templateUrl: './detail-location.component.html',
  styleUrls: ['./detail-location.component.scss'],
})
export class DetailLocationComponent implements OnInit {

  character       : Character;
  originLocation  : OriginLocation  = {};
  isUnknown       : Boolean         = true;

  constructor(private storageService  : StorageService
    , private route                   : ActivatedRoute
    , private messageService          : MessageService
    , private characterService        : CharacterService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        let idCharacter: string = String(params.get("id"));
        idCharacter = idCharacter.replace(',','');
        this.character  = this.storageService.getCharacterById(idCharacter);
        this.messageService.sendTitleDetail(TITLE);
        if( this.character.location.name !== UNKNOWN ){
          this.characterService.getLocation(this.character.location.url).subscribe(
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
