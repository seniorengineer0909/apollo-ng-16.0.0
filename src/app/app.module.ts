import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { AppSidebarComponent } from './layout/app.sidebar.component';
import { AppTopbarComponent } from './layout/app.topbar.component';
import { AppProfileSidebarComponent } from './layout/app.profilesidebar.component';
import { AppConfigComponent } from './layout/app.config.component';
import { AppMenuComponent } from './layout/app.menu.component';
import { AppMenuitemComponent } from './layout/app.menuitem.component';

import { LayoutService } from 'src/app/service/app.layout.service';
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

import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    AppSidebarComponent,
    AppTopbarComponent,
    AppProfileSidebarComponent,
    AppConfigComponent,
    AppMenuComponent,
    AppMenuitemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    SidebarModule,
    BadgeModule,
    RadioButtonModule,
    InputSwitchModule,
    RippleModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    LayoutService, CountryService, CustomerService, EventService, IconService, NodeService,
    PhotoService, ProductService, BreadcrumbService, ConfigService, MenuService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
