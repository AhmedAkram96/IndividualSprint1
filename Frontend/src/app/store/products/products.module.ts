import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service'
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [ThemeModule,ProductsRoutingModule,HttpClientModule,HttpModule,FormsModule],
  declarations: [ProductsComponent],
  providers: [ProductsService]
})
export class ProductsModule {}
