import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCheckoutFormComponent } from './app.checkoutform.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: AppCheckoutFormComponent }
    ])],
    exports: [RouterModule]
})
export class AppCheckoutFormRoutingModule { }
