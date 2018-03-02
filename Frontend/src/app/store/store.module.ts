import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
//import { ProductUpdateComponent } from './product-update/product-update.component';



@NgModule({
  imports: [ThemeModule, StoreRoutingModule],
  declarations: [StoreComponent],
  entryComponents: [],
  providers: []
})
export class StoreModule {}