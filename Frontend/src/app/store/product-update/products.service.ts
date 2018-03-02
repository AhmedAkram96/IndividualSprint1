import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { RouterModule, Routes } from '@angular/router';

@Injectable()

export class ProductsService {
constructor(private httpClient: HttpClient){}


getProducts(){
    return this.httpClient.get(environment.apiUrl +'product/getProducts') ;
}

postProduct(data,config){
    
    this.httpClient.post(environment.apiUrl+ 'product/createProduct' ,data,config).subscribe(
        res=>{
          console.log(res)
        }
      );
    }
deleteproduct(Id,config){
    this.httpClient.delete(environment.apiUrl+'product/deleteProduct/'+Id,config).subscribe();
    window.location.reload();
}
}

