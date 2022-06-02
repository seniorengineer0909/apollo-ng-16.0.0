import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { AppSidebarComponent } from './layout/app.sidebar.component';
import { AppTopbarComponent } from './layout/app.topbar.component';
import { AppMenuComponent } from './layout/app.menu.component';
import { AppMenuitemComponent } from './layout/app.menuitem.component';

import { CountryService } from 'src/app/service/countryservice';
import { CustomerService } from 'src/app/service/customerservice';
import { EventService } from 'src/app/service/eventservice';
import { IconService } from 'src/app/service/iconservice';
import { NodeService } from 'src/app/service/nodeservice';
import { PhotoService } from 'src/app/service/photoservice';
import { ProductService } from 'src/app/service/productservice';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';
import { ConfigService } from 'src/app/service/app.config.service';
import { MenuService } from './layout/app.menu.service';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    AppSidebarComponent,
    AppTopbarComponent,
    AppMenuComponent,
    AppMenuitemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    CountryService, CustomerService, EventService, IconService, NodeService,
    PhotoService, ProductService, BreadcrumbService, ConfigService, MenuService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
