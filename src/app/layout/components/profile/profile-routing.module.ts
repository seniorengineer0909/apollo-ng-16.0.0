import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppFollowersComponent } from './followers/app.followers.component';
import { AppOverviewComponent } from './overview/app.overview.component';
import { ProfileComponent } from './profile.component';
import { AppSettingsComponent } from './settings/app.settings.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ProfileComponent, children:[
            { path: '', redirectTo:'overview', pathMatch:'full'},
            { path: 'overview', component: AppOverviewComponent},
            { path: 'followers', component: AppFollowersComponent},
            { path: 'settings', component: AppSettingsComponent},
        ]},
        { path: 'create', loadChildren: () => import('./create/app.create.module').then(m => m.AppCreateModule) },
        { path: 'profilelist', loadChildren: () => import('./profilelist/app.profilelist.module').then(m => m.AppProfileListModule) },

    ])],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }
