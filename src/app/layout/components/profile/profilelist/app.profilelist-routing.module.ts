import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppProfileListComponent } from './app.profilelist.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: AppProfileListComponent }

    ])],
    exports: [RouterModule]
})
export class AppProfileListRoutingModule { }
