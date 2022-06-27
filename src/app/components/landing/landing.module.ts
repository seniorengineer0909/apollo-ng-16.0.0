import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfigModule } from 'src/app/layout/config/app.config.module';
import { AnimateEnter } from './animateenter.directive'; 

@NgModule({
    imports: [
        CommonModule,
        LandingRoutingModule,
        ButtonModule,
        RouterModule,
        StyleClassModule,
        AppConfigModule,
    ],
    declarations: [LandingComponent, AnimateEnter]
})
export class LandingModule { }
