import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.css']
})
export class ProdDetailsComponent implements OnInit {

  pID:number;

  constructor(private ar:ActivatedRoute) {

   }

  ngOnInit() {
    //fetch the route parameter product id
  this.ar.params.subscribe(routeParams=>{
    //handler will execute when param changes
    //routeparams is an array of all route parameters
  
  this.pID=parseInt(routeParams['productId']);
  })
  
  }

}
