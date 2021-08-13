import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../../../commons/services/storage.service';
import { MessageService } from '../../../commons/services/message.service';
import { Character } from '../../../commons/interfaces/character';
import { Observable } from 'rxjs';
import { CharacterService } from '../../../services/character.service';

const TITLE = "Episodes";

@Component({
  selector: 'app-detail-episodes',
  templateUrl: './detail-episodes.component.html',
  styleUrls: ['./detail-episodes.component.scss'],
})
export class DetailEpisodesComponent implements OnInit {

  character : Character;
  episodes  : Observable<any>[] = new Array();
  episodess : any[]             = new Array();

  constructor(private storageService  : StorageService
    , private route                   : ActivatedRoute
    , private messageService          : MessageService
    , private characterService        : CharacterService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(
      params => {
        this.episodes   = new Array();
        this.episodess  = new Array();
        let idCharacter: string = String(params.get("id"));
        idCharacter = idCharacter.replace(',','');
        this.character                            = this.storageService.getCharacterById(idCharacter);
        this.messageService.sendTitleDetail(TITLE);
        this.character.episode.forEach(element => {
          this.episodes.push(this.characterService.getLocation(element.toString()));
        });

        this.episodes.forEach(element => {
          element.subscribe(
            data =>{
              this.episodess.push(data);
            }
          );
        });

      }
    );
  }

}
