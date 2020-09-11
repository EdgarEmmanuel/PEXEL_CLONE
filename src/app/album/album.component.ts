import { Images } from './../../Images';
import { ImagesApiService } from './../images-api.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor(private apiImages:ImagesApiService) { }
  IMAGES=[];

  ngOnInit(): void {
    this.apiImages.getAllImages().subscribe(
      (data:any)=>{
        this.IMAGES.push(data);
      }
    )
  }

}
