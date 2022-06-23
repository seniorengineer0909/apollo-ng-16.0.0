import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileListComponent } from './profilelist.component';
import { ProfileCreateComponent } from './profilecreate.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'list', component: ProfileListComponent },
        { path: 'edit', component: ProfileCreateComponent }
    ])],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }
