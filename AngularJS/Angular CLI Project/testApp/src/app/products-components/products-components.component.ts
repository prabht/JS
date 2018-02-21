import { Component, OnInit } from '@angular/core';
import { productsServices } from './products.service';
import { ProserBService } from './proser-b.service';
import { ProseraService } from './prosera.service';
import { CartService } from '../cart/cart.service';
@Component({
  selector: 'app-products-components',
  templateUrl: './products-components.component.html',
  styleUrls: ['./products-components.component.css'],
  // providers:[productsServices,ProserBService]
  providers:[{provide:productsServices,useClass:ProserBService}]
  
})
export class ProductsComponentsComponent  {
  products: Array<Products>;

  constructor(private productservice: productsServices,private cs:CartService) {
    this.products = productservice.getProducts();

}
  
  ngOnInit() {
  }
  remove(i: number): void {
    //remove the element from the array

    console.log(i);
    this.products.splice(i, 1);
  }
  validate(se: string) {
    //we need input value of textbox
    console.log(se)
  }
  
  add(prod:Products):void{ 
    this.cs.setuser(prod);
  }

}
export class Products {
  id: number;
  name: string;
  price: number;
  qty: number;
  imgPath: string;

  constructor(id: number, name: string, price: number, qty: number, imgPath: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.qty = qty;
    this.imgPath = imgPath;
  }


}


