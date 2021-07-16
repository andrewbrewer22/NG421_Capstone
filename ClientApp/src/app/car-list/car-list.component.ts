import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { ICar } from '../icar';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: ICar[] = [];
  car: ICar = {
    make: '',
    model: '',
    year: 0
  };
  constructor(private carService: CarService) { }

  async ngOnInit() {
    this.cars = await this.carService.Get();
  }

  async save() {
    await this.carService.Post(this.car);
    this.cars = await this.carService.Get();
  }

}
