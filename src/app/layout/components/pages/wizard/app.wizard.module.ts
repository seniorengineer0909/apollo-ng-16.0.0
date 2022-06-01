import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppWizardComponent } from './app.wizard.component';
import { AppWizardRoutingModule } from './app.wizard-routing.module';
import { StepsModule } from 'primeng/steps';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SelectComponent } from './select/select.component';
import { StartComponent } from './start/start.component';
import { ConfigureComponent } from './configure/configure.component';
import { WizardCardComponent } from './card/wizard.card.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AppWizardRoutingModule,
    StepsModule,
    ButtonModule,
    RippleModule,
  ],
  declarations: [AppWizardComponent, SelectComponent, StartComponent, ConfigureComponent, WizardCardComponent]
})
export class AppWizardModule { }
