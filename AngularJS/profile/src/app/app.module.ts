import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProfComponent } from './prof/prof.component';
import { PersonComponent } from './person/person.component';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { LoginComponent } from '../login/login.component';
import { ProductsComponentsComponent } from './products-components/products-components.component';
import { PhotographsComponent } from './photographs/photographs.component';
import { MenuComponent } from './menu/menu.component';
import {RouterModule, Routes} from '@angular/router';
import { PnfComponent } from './pnf/pnf.component';
import{MpComponent} from './mp/mp.component';
import { ProdDetailsComponent } from './prod-details/prod-details.component'
import { SignUpFormComponent } from './user/signupform.component';
let routes:Routes=[
  {
    path:'',
    component:AppHeaderComponent
  },
  {
path:'login',
component:LoginComponent,
children:[
  {
    path:'admin',
    component:PersonComponent
  },
  {
    path:'user',
    component:ProfComponent
  }
]
  },
  {
    path:'product-components',
    component:ProductsComponentsComponent,
    children:[
      {
        path:'prodDetails/:productId',
        component:ProdDetailsComponent
      }
    ]
    
  },

  {
  path:'**',
  component:PnfComponent
}

]


@NgModule({
  declarations: [
    AppComponent,
    ProfComponent,
    PersonComponent,
    AppHeaderComponent,
    LoginComponent,
    ProductsComponentsComponent,
    PhotographsComponent,
    MenuComponent,
    PnfComponent,
  MpComponent,
  ProdDetailsComponent,
  SignUpFormComponent   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
