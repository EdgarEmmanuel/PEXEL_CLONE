import { ImagesApiService } from './images-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AlbumComponent } from './album/album.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OneImageComponent } from './one-image/one-image.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SerachPageComponent } from './serach-page/serach-page.component';
import { VideoAppComponent } from './video-app/video-app.component';
import { OneVideoComponent } from './one-video/one-video.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AlbumComponent,
    NotFoundComponent,
    OneImageComponent,
    SerachPageComponent,
    VideoAppComponent,
    OneVideoComponent,
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ImagesApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
