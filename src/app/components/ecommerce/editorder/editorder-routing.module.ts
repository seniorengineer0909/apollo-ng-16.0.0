import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditOrderComponent } from './editorder.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: EditOrderComponent }
    ])],
    exports: [RouterModule]
})
export class EditOrderRoutingModule { }
