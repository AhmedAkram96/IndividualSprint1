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
  selector:'app-products',
  //templateUrl: `./products.components.html`,
  template:`<button (click)="getAllproducts()">ShowAllProducts</button>
        <hr>
        
          <form >
                  Product Name: <input type="text" name="FirstName" value="" (keyup)="onKey1($name)"><br>
                  Product price  : <input type="number" name="LastName" value="" (keyup)="onKey2($price)"><br>
          </form>
             <button (click)="AddProduct()">Add product</button>

            <hr>
             <table class="table table-responsive">
             <thead>
              <tr>
                <th>Products Table</th>
              </tr>
            </thead>
            <tbody>

            <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>PRICE</td>
            <td>SELLERNAME</td>
            <td>CreatedAt</td>
            <td>Updated-At</td>

            <td>Delete</td>
            <td>Update</td>
            

            </tr>

              <tr *ngFor="let product of products">
                <td>{{product._id}}</td>
                <td>{{product.name}}</td>
                <td>{{product.price}}</td>
                <td>{{product.SellerName}}</td>
                <td>{{product.createdAt}}</td>
                <td>{{product.updatedAt}}</td>

                <td> <span *ngIf="product.SellerName==username3"> <a (click)="deleteProduct(product._id)"> Delete product</a> </span></td>
                <td> <span *ngIf="product.SellerName==username3"> <a (click)="updateProduct(product._id)">Update</a> </span></td>

              </tr>
            </tbody>
             </table>
           `

})
export class ProductsComponent   {
   username = JSON.parse(localStorage.getItem("user"));
   
username3=this.username.username;
  public products:any[]=[];
  public ProductName='';
  public ProductPrice:number;
  public ProductPriceString='';
  public SellerName='';
  public product:any[]=[];
  

constructor(private productservice: ProductsService,private httpClient: HttpClient,private router: Router){}

updateProduct(id:string){

  localStorage.setItem("productID",id);
  localStorage.setItem("updating","true");
  this.router.navigate(["/store/product-update"]);

}


  getAllproducts() {
    this.productservice.getProducts().subscribe(
      res=>{  
        this.products = res['data'];
               console.log(res);
      }
    );
  };

  onKey1(name: KeyboardEvent) { // with type info
    this.ProductName = (<HTMLInputElement>event.target).value;
  };
  onKey2(price: KeyboardEvent) { // with type info
    this.ProductPrice = parseInt((<HTMLInputElement>event.target).value);
    
  };

    
  AddProduct(){  
    var data= JSON.stringify({name:this.ProductName,price:this.ProductPrice,SellerName:this.username.username });
    var config ={
      headers : 
    {
'Content-Type' : 'application/json'
    }
  }
  this.productservice.postProduct(data,config)
  
}


deleteProduct(ID: string, User: String){
  var config ={
    headers : 
  {
'Content-Type':'application/json'
  }
}
this.productservice.deleteproduct(ID,config)
}
}

  

