import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppWizardComponent } from './app.wizard.component';
import { SelectComponent } from './select/select.component';
import { ConfigureComponent } from './configure/configure.component';
import { StartComponent } from './start/start.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppWizardComponent, children: [
      {path:'', redirectTo: 'select', pathMatch: 'full'},
      {path: 'select', component: SelectComponent},
      {path: 'configure', component: ConfigureComponent},
      {path: 'start', component: StartComponent},
    ]},
  ])],
  exports: [RouterModule]
})
export class AppWizardRoutingModule { }
