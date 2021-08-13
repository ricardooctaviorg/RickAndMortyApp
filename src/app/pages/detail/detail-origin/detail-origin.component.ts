import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../../../commons/services/storage.service';
import { Character } from '../../../commons/interfaces/character';
import { MessageService } from '../../../commons/services/message.service';
import { CharacterService } from '../../../services/character.service';
import { OriginLocation } from '../../../commons/interfaces/origin-location';
import { Observable } from 'rxjs';

const TITLE   = "Origin";
const UNKNOWN = "unknown";

@Component({
  selector: 'app-detail-origin',
  templateUrl: './detail-origin.component.html',
  styleUrls: ['./detail-origin.component.scss'],
})
export class DetailOriginComponent implements OnInit {

  character       : Character;
  originLocation  : OriginLocation    = {};
  isUnknown       : Boolean           = true;
  residents       : Observable<any>[] = new Array();
  residentss      : Character[]       = new Array();
  residentsLength : number            = 100;

  constructor(private storageService  : StorageService
    , private messageService          : MessageService
    , private route                   : ActivatedRoute
    , private characterService        : CharacterService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(
      async params => {
        this.residents  = new Array();
        this.residentss = new Array();
        let idCharacter: string = String(params.get("id"));
        idCharacter = idCharacter.replace(',','');
        this.character = this.storageService.getCharacterById(idCharacter);
        this.messageService.sendTitleDetail(TITLE);
        if( this.character.origin.name !== UNKNOWN ){
          this.characterService.getLocation(this.character.origin.url).subscribe(
            data =>{
              this.originLocation = data as OriginLocation;
              this.isUnknown      = false;

              this.originLocation.residents.forEach(element => {
                this.residents.push(this.characterService.getLocation(element.toString()));
              });

              this.residents.forEach(element => {
                element.subscribe(
                  data=>{
                    this.residentss.push(data as Character);
                  }
                );
              });
              this.residentsLength =  this.residents.length;             
            }
          );
        }
      }
    );
  }

}
