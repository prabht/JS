import { Component, OnInit } from '@angular/core';
import { Products } from '../products-components/products-components.component';
import { CartService } from './cart.service';
import { productsServices } from '../products-components/products.service';
import { ProserBService } from '../products-components/proser-b.service';


@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
prod:Array<Products>;

  constructor(private cs:CartService) {
    console.log("cart constructor");
    this.prod=new Array<Products>();
    this.cs.getuser().subscribe(user=>{
    this.prod.push(user);
    });
   }

  ngOnInit() {

  }
  remove(p:Products,i:number): void {
    //remove the element from the array
    console.log(i);
    
    this.cs.removal(p);
    this.prod.splice(i, 1);
  }

    // add(prod:Products):void{ 
    //   this.cs.setuser(prod);
    // }

  
}
