import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppNewProductComponent } from './app.newproduct.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AppNewProductComponent}
  ])],
  exports: [RouterModule]
})
export class AppNewProductRoutingModule { }
