import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photo.service';
import { photo } from './photo';

@Component({
  selector: 'photographs',
  templateUrl: './photographs.component.html',
  styleUrls: ['./photographs.component.css'],
  providers:[PhotoService]
})
export class PhotographsComponent implements OnInit {
  photos:Array<photo>;
  constructor(private ps:PhotoService) {

   }

  ngOnInit() {
    this.ps.getphotos().subscribe(data=>{
      this.photos=data;
    })
  }
}
