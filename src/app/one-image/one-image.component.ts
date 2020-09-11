import { Component, Input, OnInit } from '@angular/core';
import { Images } from 'src/Images';

@Component({
  selector: 'app-one-image',
  templateUrl: './one-image.component.html',
  styleUrls: ['./one-image.component.css']
})
export class OneImageComponent implements OnInit {
  @Input("image") image:any;

  constructor() { }

  ngOnInit(): void {
  }

}
