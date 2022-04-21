import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { SharedComponent } from './shared/shared.component';
import { HttpClientModule} from '@angular/common/http';
import { NavigatorComponent } from './core/navigator/navigator.component';
import { PagesComponent } from './pages/pages.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { GestionPageComponent } from './pages/gestion-page/gestion-page.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsDetailsComponent } from './pages/products-page/products-details/products-details.component';


@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    SharedComponent,
    NavigatorComponent,
    PagesComponent,
    HomePageComponent,
    ProductsPageComponent,
    GestionPageComponent,
    GalleryComponent,
    HeaderComponent,
    FooterComponent,
    ProductsDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
