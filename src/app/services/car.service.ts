import { ResponseModel } from './../models/responseModel';
import { CarDetails } from './../models/carDetails';
import { Car } from './../models/car';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44397/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getall';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsDetailsByCar(
    carId: number
  ): Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl + 'cars/getcardetail?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }
  getCarsDetails(): Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl + 'cars/getallcardetails';
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl + 'cars/getcarbycolor?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl + 'cars/getcarbybrand?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  addToCar(car:Car):Observable<ResponseModel>{
    let newPath = this.apiUrl + "cars/add";
    return this.httpClient.post<ResponseModel>(newPath,car);
  }

  updateCar(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'cars/update',car);
  }

}
