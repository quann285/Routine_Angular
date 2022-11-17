import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SearchComponent } from './components/search/search.component';
import { NewComponent } from './components/new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    CartComponent,
    ProductComponent,
    ProductDetailComponent,
    SearchComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
