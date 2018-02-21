import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { ProductsComponentsComponent } from './products-components/products-components.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { MpComponent } from './mp/mp.component';
import { ProfileComponent } from './profile/profile.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { CartComponent } from './cart/cart.component';
import { CamelcasePipe } from './camelcase.pipe';
import { PhonePipe } from './phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductsComponentsComponent,
    LoginComponent,
    MpComponent,
    ProfileComponent,
    AppHeaderComponent,
    CartComponent,
    CamelcasePipe,
    PhonePipe
  ],//component that belong to appmodule
  imports: [
    BrowserModule,FormsModule
  ],//by default loads core module
  providers: [],
  bootstrap: [AppComponent]//root component
})
export class AppModule { }
