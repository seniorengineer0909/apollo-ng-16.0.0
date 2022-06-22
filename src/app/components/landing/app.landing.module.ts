import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLandingRoutingModule } from './app.landing-routing.module';
import { AppLandingComponent } from './app.landing.component';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
    imports: [
        CommonModule,
        AppLandingRoutingModule,
        ButtonModule,
        RouterModule,
        StyleClassModule,
        DragDropModule
    ],
    declarations: [AppLandingComponent]
})
export class AppLandingModule { }
