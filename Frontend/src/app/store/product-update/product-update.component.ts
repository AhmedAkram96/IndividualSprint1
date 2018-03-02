import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';
import { NumberFormatStyle, NgIf } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";

@Component({
  selector:'app-product-update',
  //templateUrl: `./products.components.html`,
  template:`<button (click)="update()" >Update</button>
  <form >
  Product Name: <input type="text" name="FirstName" value="" (keyup)="onKey1($name)"><br>
  Product price  : <input type="number" name="LastName" value="" (keyup)="onKey2($price)"><br>
</form>
`


})

export class ProductUpdateComponent   {
  username = JSON.parse(localStorage.getItem("user"));

public ProductName='';
public ProductPrice:number;
constructor(private httpClient: HttpClient,private router: Router){}

ngOnInit(){

  console.log(localStorage.getItem("productID"));
}
    
onKey1(name: KeyboardEvent) { // with type info
  this.ProductName = (<HTMLInputElement>event.target).value;
};
onKey2(price: KeyboardEvent) { // with type info
  this.ProductPrice = parseInt((<HTMLInputElement>event.target).value);
  
};

update(){
  var config ={
           headers : 
         {
         'Content-Type' : 'application/json'
         }
     };
     var data= JSON.stringify({name:this.ProductName,price:this.ProductPrice,SellerName:this.username.username });

  this.httpClient.patch(environment.apiUrl+'product/updateProduct/'+localStorage.getItem("productID"),data,config).
          subscribe(
           (data:any) => {console.log(data)});
      
           this.router.navigate(["/store/products"]);

          }


}