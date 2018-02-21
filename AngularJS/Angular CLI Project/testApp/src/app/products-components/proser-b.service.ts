import { Injectable } from '@angular/core';
import { productsServices } from './../products-components/products.service'
import { Products, ProductsComponentsComponent } from './products-components.component';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { CartService } from '../cart/cart.service';

@Injectable()
export class ProserBService extends productsServices {

  constructor(private cs:CartService) {
    super();
      this.products=new Array<Products>();
      let p1=new Products(101,"fdsff",4,1,"assets/images/1.jpg") 
      let p2=new Products(102,"casfsfmerafsfsf",1,1,"assets/images/4.jpg") 
      let p3=new Products(103,"misfsf5",5,2,"assets/images/5.jpg") 
      let p4=new Products(104,"sasfsfsmsung",7,1,"assets/images/2.jpg") 
      let p5=new Products(105,"lapfftop",2,1,"assets/images/3.jpg") 
      this.products.push(p1);
      this.products.push(p2);
      this.products.push(p3);
      this.products.push(p4);
      this.products.push(p5);
    
      this.cs.getRemoved().subscribe(user=>{
        this.products.push(user);});

        //     this.products.push(user);
        // });}
    }
    // addp(){console.log("dsddsd");
    //   this.products=new Array<Products>();
    //   console.log(this.ad.getuser());
    //   this.ad.getuser().subscribe(user=>{
    //     this.products.push(user);
    // });}
    
  }
  
