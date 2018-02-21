import { Component, OnInit, Inject } from '@angular/core';
import { productsServices } from './products.service';
import { ProserBService } from './proser-b.service';
import { ProseraService } from './prosera.service';
import { LoginService } from '../login.service';
@Component({
  selector: 'product',
  templateUrl: './products-components.component.html',
  styleUrls: ['./products-components.component.css'],
  providers:[ProseraService]
})
export class ProductsComponentsComponent  {
  products: Array<Products>;

  // constructor(productservice: productsServices) {
  //   this.products = productservice.getProducts();
  // }
  isAdmin:boolean;
  constructor(private ls:LoginService, ps:ProseraService){
    this.products=ps.getProducts();
    this.ls.getuser().subscribe(user=>{
      this.isAdmin=user.role;
    })
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


