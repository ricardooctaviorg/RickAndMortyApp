import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../../commons/services/storage.service';
import { Character } from '../../commons/interfaces/character';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  titleDetail : string = " Rick Sanchez ";
  character   : Character;

  constructor(private route                 : ActivatedRoute
              , private storageService      : StorageService) {

   }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        const characterId        : string         = String(params.get("id"));
        this.character                            = this.storageService.getCharacterById(characterId);
        this.titleDetail                          = this.character.name;
        }
    );

  }

}
