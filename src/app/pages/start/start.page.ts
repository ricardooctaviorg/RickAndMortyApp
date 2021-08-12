import { Component, OnInit, ViewChild } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { StorageService } from '../../commons/services/storage.service';
import { Character } from '../../commons/interfaces/character';
import { IonInfiniteScroll, IonRefresher } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from '../../commons/services/util.service';
import { StatusCharacterIcon } from '../../commons/enums/status-character-icon.enum';

const PAGE_SIZE = 10;

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  charactersStorage : Character[] = new Array();
  charactersCurrent : Character[] = new Array();
  characters        : Character[] = new Array();
  character         : Character;
  pageCurrent       : number = 1;
  pageData          : any;
  emptyList         : Boolean = false;
  
  iconAliveStatus   : string  = StatusCharacterIcon.CHARACTER_ALIEVE.toString();
  iconDeadStatus    : string  = StatusCharacterIcon.CHARACTER_DEAD.toString();
  iconUnknownStatus : string  = StatusCharacterIcon.CHARACTER_UNKNOWN.toString();

  characterFav      : any     = {};
  charactersFavsX   : any     = {};
 

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonRefresher) ionRefresher: IonRefresher;

  constructor(private characterService: CharacterService
    , private storageService: StorageService
    , private route: ActivatedRoute
    , private utilService: UtilService) { }

  ngOnInit() {
    this.consumeData('1');
  }

  consumeData(page: string) {
    this.characterService.getAllCharacters(page).subscribe(
      data => {

        if (data.info.count == 0)
          this.emptyList = true;

        this.charactersCurrent = data.results as Character[];
        this.characters.push(... this.applyFavs(this.setDisableFavs(this.charactersCurrent)));
        this.storageService.setCharacters(this.characters);
      }
    );
  }

  setDisableFavs(characterss: Character[]) {
    characterss.forEach(element => {
      element.fav = false;
    });
    return characterss;
  }

   applyFavs(characterss: Character[]): Character[]{
    this.charactersFavsX = this.storageService.getCharactersFav() as any;
    console.log("charactersFavsX", this.charactersFavsX);
    characterss.forEach(element => {
      Object.keys(this.charactersFavsX).forEach(function(key) {
          if( key ==  element.id)
            element.fav = true;
      })
    });
    return characterss;
  }

  loadData(event) {
    console.log("loadData");
    setTimeout(() => {
      this.pageCurrent++;
      this.consumeData(String(this.pageCurrent));
      this.infiniteScroll.complete();
    }, 500);
  }

  async doRefresh(event) {
    console.log("doRefresh");
    await this.cleanCharacters();
    setTimeout(() => {
      this.consumeData(String(this.pageCurrent));
      this.ionRefresher.complete();
    }, 1000);
  }

  async cleanCharacters() {
    this.characters = [];
    this.pageCurrent = 1;
    await this.storageService.setCharacters(this.characters);
  }

  switchFav(id: string, fav: Boolean) {

    this.characters.forEach(element => {
      if (element.id == id){
        if (element.fav){
          element.fav = false;
          delete this.characterFav[element.id];
        }
        else{
          element.fav = true;
          this.characterFav = this.storageService.getCharactersFav() as any;
          this.characterFav[element.id] = true;
        }
        this.storageService.setCharactersFav(this.characterFav);
        this.utilService.showChangeFav(element.fav, element.name);
      }

    });
  }
}