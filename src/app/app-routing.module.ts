import { VideoAppComponent } from './video-app/video-app.component';
import { SerachPageComponent } from './serach-page/serach-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AlbumComponent } from './album/album.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"",component:AlbumComponent},
  {path:"notFound",component:NotFoundComponent},
  {path:"videos",component:VideoAppComponent},
  {path:"searchPage/:name",component:SerachPageComponent},
  {path:"**",redirectTo:"notFound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
