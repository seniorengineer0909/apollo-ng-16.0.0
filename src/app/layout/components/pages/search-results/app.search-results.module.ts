import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSearchResultsComponent } from './app.search-results.component';
import { AppSearchResultsRoutingModule } from './app.search-results-routing.module';


@NgModule({
  imports: [
    CommonModule,
    AppSearchResultsRoutingModule
  ],
  declarations: [AppSearchResultsComponent]
})
export class AppSearchResultsModule { }
