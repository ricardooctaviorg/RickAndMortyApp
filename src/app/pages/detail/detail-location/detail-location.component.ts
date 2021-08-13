import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../../commons/interfaces/character';
import { StorageService } from '../../../commons/services/storage.service';
import { MessageService } from '../../../commons/services/message.service';
import { CharacterService } from '../../../services/character.service';
import { OriginLocation } from '../../../commons/interfaces/origin-location';
import { Observable } from 'rxjs';

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
  residents       : Observable<any>[] = new Array();
  residentss      : Character[]       = new Array();
  residentsLength : number            = 0;

  constructor(private storageService  : StorageService
    , private route                   : ActivatedRoute
    , private messageService          : MessageService
    , private characterService        : CharacterService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.residents  = new Array();
        this.residentss = new Array();
        let idCharacter: string = String(params.get("id"));
        idCharacter = idCharacter.replace(',','');
        this.character  = this.storageService.getCharacterById(idCharacter);
        this.messageService.sendTitleDetail(TITLE);
        if( this.character.location.name !== UNKNOWN ){
          this.characterService.getLocation(this.character.location.url).subscribe(
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
