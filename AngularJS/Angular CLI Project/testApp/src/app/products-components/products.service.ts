import {Products} from './products-components.component';
import {Injectable} from '@angular/core'
@Injectable()
export class productsServices{
    products:Array<Products>;
    isAdmin:boolean=true;
    // constructor(){
    //     this.products=new Array<Products>();
    //     let p1=new Products(101,"mobile",4,1,"assets/images/1.jpg") 
    //     let p2=new Products(102,"camera",1,1,"assets/images/4.jpg") 
    //     let p3=new Products(103,"mi5",5,2,"assets/images/5.jpg") 
    //     let p4=new Products(104,"samsung",7,1,"assets/images/2.jpg") 
    //     let p5=new Products(105,"laptop",2,1,"assets/images/3.jpg") 
    //     this.products.push(p1);
    //     this.products.push(p2);
    //     this.products.push(p3);
    //     this.products.push(p4);
    //     this.products.push(p5);
    //   }
      getProducts():Array<Products>{
          return this.products;
      }
    //  setProd(p:Products){
    //     this.products.push(p);
    //   } 
}