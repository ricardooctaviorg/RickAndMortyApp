import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../../commons/services/storage.service';
import { Character } from '../../commons/interfaces/character';
import { MessageService } from '../../commons/services/message.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  titleDetail   : string      = "";
  countEpisodes : number      = 0;
  character     : Character   = {};

  constructor(private route                 : ActivatedRoute
              , private storageService      : StorageService
              , private messageService      : MessageService
              , private router              : Router) {

   }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        const characterId: string = String(params.get("id"));
        this.character = this.storageService.getCharacterById(characterId);
      }
    );

    this.titleDetail = this.character.name;
    this.countEpisodes = this.character.episode.length;
    this.router.navigate(['detail', this.character.id,'detailOrigin', this.character.id]);
    this.messageService.titleDetailEmitter.subscribe(
      title => {
        this.titleDetail = title;
      }
    );
  }

}
