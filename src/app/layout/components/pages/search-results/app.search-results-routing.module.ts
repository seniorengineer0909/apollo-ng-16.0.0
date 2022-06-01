import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppSearchResultsComponent } from './app.search-results.component';


@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppSearchResultsComponent }
  ])],
  exports: [RouterModule]
})
export class AppSearchResultsRoutingModule { }
