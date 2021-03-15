import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Car } from '../models/car';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44356/api/cars/details";
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{ let newPath = environment.apiUrl + 'cars/getcarsdetail';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarByBrand(brandId:Number):Observable<ListResponseModel<Car>>{ let newPath = environment.apiUrl + 'cars/getbybrand?getbybrand=${brandId}';
   return this.httpClient.get<ListResponseModel<Car>>(newPath);
}

  getCarByColor(colorId:Number):Observable<ListResponseModel<Car>>{ 
    console.log("service",colorId)
    let newPath = environment.apiUrl +'cars/getbycolor?colorid=${colorId}';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
    
    }