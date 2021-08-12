import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Character } from 'src/app/commons/interfaces/character';
import { StorageService } from '../../commons/services/storage.service';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  @ViewChild('aSlides') aSlides : IonSlides;
  titleDetail                   : string  = "My Favorites";
  characterFavOrigin            : any     = {};
  characterCatalogList          : Character[] = new Array();

  avatarSlide = {
    slidesPerView: 1.5
    , centeredSlides: true
  };

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.characterFavOrigin = this.storageService.getCharactersFav();
    for (const key of Object.keys(this.characterFavOrigin)) {
      console.log(key, this.characterFavOrigin[key]);
      this.characterCatalogList.push(this.characterFavOrigin[key] as Character);
  }

    /*this.characterCatalogListOrigin.forEach(element => {
      if( element.fav )
      this.characterCatalogList.push(element);
    });*/
  }

  selectAvatar(character: Character) {
    /*this.characterCatalogList.forEach(
      av => {
        av.selected = false;
      });*/
    character.selected = true;
    //this.myManagementDelivery.avatar = avatar.avatarUrl;
    //this.avatarIdCurrent = avatar.avatarId;
  }

}
