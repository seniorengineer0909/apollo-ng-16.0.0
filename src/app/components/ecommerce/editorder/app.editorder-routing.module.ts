import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppEditOrderComponent } from './app.editorder.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: AppEditOrderComponent }
    ])],
    exports: [RouterModule]
})
export class AppEditOrderRoutingModule { }
