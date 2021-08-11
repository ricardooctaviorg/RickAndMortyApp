import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import { CharacterFav } from '../interfaces/character-fav';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private localStorageService;
  private characters          : Character[] = new Array();
  private charactersFavs      : any;

  constructor() { 
    this.localStorageService = localStorage;
  }

  clearLocalStorage(){
    this.localStorageService.clear();
  }

  setCharacters(characterss:Character[]):void{
    this.localStorageService.setItem('characters', JSON.stringify(characterss));
  }

  getCharacters():any{
    return JSON.parse(this.localStorageService.getItem('characters'));
  }

  setCharactersFav(characterssFav:any):void{
    this.localStorageService.setItem('charactersFav', JSON.stringify(characterssFav));
  }

  getCharactersFav():any{
    return JSON.parse(this.localStorageService.getItem('charactersFav'));
  }

  /*getCharacterById( id : string ) :Character{
    this.characters = JSON.parse(this.localStorageService.getItem('characters')) as Character[];
    for(let a of this.characters)
      if(a.id == id)
        return a;
  }*/
  /*getCharacterFavById( id : string ) :CharacterFav{
    this.charactersFavs = JSON.parse(this.localStorageService.getItem('charactersFav')) as CharacterFav[];
    for(let a of this.charactersFavs)
      if(a.id == id)
        return a;
  }*/

}
