import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private localStorageService;
  private characters          :Character[] = new Array();

  constructor() { 
    this.localStorageService = localStorage;
  }

  clearLocalStorage(){
    this.localStorageService.clear();
  }

  setCharacters(character:Character[]):void{
    this.localStorageService.setItem('characters', JSON.stringify(this.characters));
  }

  getCharacters():any{
    return JSON.parse(this.localStorageService.getItem('characters'));
  }

  getCharacterById( id : string ) :Character{
    this.characters = JSON.parse(this.localStorageService.getItem('characters')) as Character[];
    for(let a of this.characters)
      if(a.id == id)
        return a;
  }
}
