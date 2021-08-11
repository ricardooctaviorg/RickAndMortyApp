import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuOpt } from './commons/enums/menu-opt';
import { UtilService } from './commons/services/util.service';

const RICK_SANCHEZ_AVATAR = "https://www.gravatar.com/userimage/198148610/d44db3235d18f4fb9ba4e7b50de5f997?size=120";
const RICK_SANCHEZ_SAYS   = "Wubba lubba dub dub !";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  menuOpts  : Observable<MenuOpt[]>;
  nameAgent : string = "";

  managementInfoCurrent = {
    name: RICK_SANCHEZ_SAYS
    , avatar: RICK_SANCHEZ_AVATAR
  }

  constructor( private utilService: UtilService) {
    this.menuOpts = this.utilService.getMainMunuOptions();
  }

  logOut(){
  
  }
}
