import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ColorsComponent } from './colors/colors.component';
import { IconsComponent } from './icons/icons.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'icons', data: { breadcrumb: 'Prime Icons' }, component: IconsComponent },
        { path: 'colors', data: { breadcrumb: 'Colors' }, component: ColorsComponent }
    ])],
    exports: [RouterModule]
})
export class UtilitiesRoutingModule { }
