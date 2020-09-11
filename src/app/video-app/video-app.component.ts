import { ImagesApiService } from './../images-api.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-video-app',
  templateUrl: './video-app.component.html',
  styleUrls: ['./video-app.component.css']
})
export class VideoAppComponent implements OnInit {

  constructor(private server:ImagesApiService) { }
  VIDEOS:any=[];
  Title:string;

  requestData(word:NgForm){
    const words = word.value["word"];
    this.Title=words;
    word.resetForm();

    this.server.getVideos(words).subscribe(
      (data:any)=>{
        this.VIDEOS = data.videos;
      }
    )
  }

  ngOnInit(): void {
    this.server.getVideos("leaves").subscribe(
      (data:any)=>{
        this.VIDEOS = data.videos;
      }
    )

    this.Title="LEAVES";
  }

}
