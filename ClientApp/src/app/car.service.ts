import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inject} from '@angular/core';
import { ICar } from './icar';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  async Get() {
    return await this.httpClient.get<ICar[]>(this.baseUrl + 'cars').toPromise();
  }

  async Post(model: ICar) {
    await this.httpClient.post<ICar[]>(this.baseUrl + 'cars', model).toPromise();
  }
}
