import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ProductUpdateRoutingModule } from './product-update-routing.module';
import { ProductUpdateComponent } from './product-update.component';
import { ProductsService } from './products.service'
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  imports: [ThemeModule,ProductUpdateRoutingModule,HttpClientModule,HttpModule],
  declarations: [ProductUpdateComponent],
  providers: [ProductsService]
})
export class ProductUpdateModule {}
