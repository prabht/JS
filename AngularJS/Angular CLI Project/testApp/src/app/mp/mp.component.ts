import { Component, OnInit } from '@angular/core';
import { productsServices } from './../products-components/products.service';
import{Products} from './../products-components/products-components.component'
@Component({
  selector: 'app-mp',
  templateUrl: './mp.component.html',
  styleUrls: ['./mp.component.css'],
  // providers:[{provide:productsServices,useClass:productsServices}]
  
})
export class MpComponent implements OnInit {
  mproducts:Products[];
  
  constructor(private productservice: productsServices) {
    console.log("mobile");
    this.mproducts = this.productservice.getProducts().filter(function(value:Products){
    return value.qty===2;     
  });
}
  ngOnInit() {
  }

}
