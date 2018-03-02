import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductUpdateComponent } from './product-update.component';

const routes: Routes = [
  { path: '', 
  component: ProductUpdateComponent,
   pathMatch: 'full'
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductUpdateRoutingModule {}
