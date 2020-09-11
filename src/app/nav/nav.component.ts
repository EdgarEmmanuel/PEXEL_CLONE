import { ImagesApiService } from './../images-api.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output()  data = new EventEmitter<any>();
  donnees:[]=[];

  constructor(private serv:ImagesApiService) { }

  ngOnInit(): void {

  }

  getdata(id:NgForm){
    //get the name in the form 
    const name=id.value["name"];

    //emit the data 
    this.data.emit(name);

    //clear the data in the form
    id.resetForm();
  }

}
