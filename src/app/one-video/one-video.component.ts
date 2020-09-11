import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-video',
  templateUrl: './one-video.component.html',
  styleUrls: ['./one-video.component.css']
})
export class OneVideoComponent implements OnInit {

  @Input() video:any;

  constructor() { }

  ngOnInit(): void {
  }

}
