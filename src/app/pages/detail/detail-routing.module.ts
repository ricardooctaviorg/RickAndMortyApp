import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPage } from './detail.page';
import { DetailOriginComponent } from './detail-origin/detail-origin.component';
import { DetailLocationComponent } from './detail-location/detail-location.component';
import { DetailEpisodesComponent } from './detail-episodes/detail-episodes.component';

const routes: Routes = [
  {
    path: '',
    component: DetailPage
    , children:[
      {
        path: 'detailOrigin/:id'
        , component:DetailOriginComponent
      }, 
     {
      path: 'detailLocation/:id'
      , component:DetailLocationComponent
     }, 
     {
      path: 'detailEpisodes/:id'
      , component:DetailEpisodesComponent
     }  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPageRoutingModule {}
