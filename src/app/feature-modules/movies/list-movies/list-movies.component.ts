import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {ConfigService} from '../../../config/config.service';
import {Movies} from '../../../config/models/movie';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  currentItems = 'Tv';
  moviesCount?: number;
  movie: Movies[] = [];
  alldata: number;
  value: any;
  key = '';
  itemImageUrl = 'https://img1.pnghut.com/19/2/17/KGWRibJium/icon-design-black-saving-tirelire-small-to-medium-sized-cats.jpg';
  isUnchanged = true;
  classes = 'special';
  parentItem = 'lamp';
  colorHeader = 'colorHeader';
  propertyTitle = 'property titlesssssssss';
  interpolationTitle = 'interpolated titlessssssss';
  specialHeader = 'specialHeader';
  border = 'border';
  items = ['item1', 'item2', 'item3', 'item4', 'item5'];
  fontSizePx = 16;
  name = '';
  currentItemsNgModel: any;

  setValue() {
    this.name = 'Nancy';
  }

  constructor(
    public configService: ConfigService,
  ) {
    // this.movies();
  }

  ngOnInit() {
    // this.movies();
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32
  }

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  trackByFn(index, item) {
    return item.id; // or item.id
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }

  convertToF(event: any) {
    this.value = event;
  }

  edit(each: string) {
    console.log(each);
  }
}
