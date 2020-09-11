import { ImagesApiService } from './../images-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serach-page',
  templateUrl: './serach-page.component.html',
  styleUrls: ['./serach-page.component.css']
})
export class SerachPageComponent implements OnInit {

  constructor(private acRoute:ActivatedRoute,private server:ImagesApiService) { }

  DATA:any=[];
  research:string;
  VIDEOS:any=[];

  ngOnInit(): void {
    const name = this.acRoute.snapshot.params[("name")];
    this.research = name;

    //get the pictures 
    this.server.doResearch(name).subscribe(
      (data:any)=>{
        this.DATA.push(data.photos);
      }
    )
  }

}
