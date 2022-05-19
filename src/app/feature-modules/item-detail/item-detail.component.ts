import {Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges} from '@angular/core';
import {Data} from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit, OnChanges {
  @Input() childItem: string;
  @Input() items!: string;
  @Output() deleteRequest = new EventEmitter<Item>();
  @Output() newItemEvent = new EventEmitter<string>();
  displayNone = '';
  lineThrough = '';
  itemImageUrl = 'https://img1.pnghut.com/19/2/17/KGWRibJium/icon-design-black-saving-tirelire-small-to-medium-sized-cats.jpg';
  @Input() item;
  @Input() size: number | string;
  @Output() sizeChange = new EventEmitter<number>();
  @Input() weatherData: Dasta[];
  city = '';

  names = '';
  namess = '';
  humidity: string;
  wind: string;
  cityName: string;

  dec() {
    this.resize(-1);
  }

  inc() {
    this.resize(+1);
  }

  // Emitter always
  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

  constructor() {
  }

  getCity(target: EventTarget) {
    this.cityName = (target as HTMLInputElement).value;
    console.log(this.cityName);
    console.log(this.weatherData[0].name);
    for (const a in this.weatherData) {
      if (this.weatherData[a].name === this.cityName) {
        this.wind = this.weatherData[a].wind;
        this.humidity = this.weatherData[a].humidity;
      }
    }
  }

  // ngOnChanges() {
  //   this.names;
  // }

  ngOnInit() {

  }


  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  delete() {
    this.deleteRequest.emit(this.item);
    this.displayNone = this.displayNone ? 'none' : 'block';
    this.lineThrough = this.lineThrough ? '' : 'line-through';
  }

  ngOnChanges(changes: SimpleChanges): void {


  }

}

export class Item {
  name: '';
}

interface Dasta {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}
