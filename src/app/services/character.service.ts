import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { StorageService } from '../commons/services/storage.service';
import { Observable } from 'rxjs';

const GATEWAY_VALUE         = environment.gateway;
const CHARACTER_RESOURCE    = environment.characterResource;
const LOCATION_RESOURCE     = environment.locationResource;

const GETALLCHARACTERS  = GATEWAY_VALUE
  + CHARACTER_RESOURCE;

const GETLOCATION       = GATEWAY_VALUE
  + LOCATION_RESOURCE;

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor( private httpClient         : HttpClient
                , private storageService  : StorageService ) { }

  public getAllCharacters( page: string ): Observable<any> {

    const headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin','*');
    
      const params = new HttpParams()
      .set('page', page);

    const httpOptionsX =
    {
      headers
      ,params
    };
    return this.httpClient.get<any>(`${GETALLCHARACTERS}`, httpOptionsX);
  }

  public getLocation( urlString: String ): Observable<any> {

    const headers = new HttpHeaders();
    const params  = new HttpParams();

    const httpOptionsX =
    {
      headers
      ,params
    };
    return this.httpClient.get<any>(`${urlString}`);
  }


}
