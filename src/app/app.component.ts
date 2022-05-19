import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Item} from './feature-modules/item-detail/item-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  currentItem = {name: 'teapot'};
  clickMessage = '';
  title = 'Weather Details';
  date = new Date('2012-2-2');
  sampleNo = 312.562;
  currency = 'USD';
  weatherData = [
    {
      'name': 'San Jose',
      'temperature': '36º F',
      'wind': '31Kmph',
      'humidity': '66%'
    },
    {
      'name': 'Seattle',
      'temperature': '30º F',
      'wind': '4Kmph',
      'humidity': '9%'
    },
    {
      'name': 'New York',
      'temperature': '20º F',
      'wind': '8Kmph',
      'humidity': '61%'
    },
    {
      'name': 'Chicago',
      'temperature': '27º F',
      'wind': '35Kmph',
      'humidity': '2%'
    },
    {
      'name': 'Atlanta',
      'temperature': '22º F',
      'wind': '25Kmph',
      'humidity': '5%'
    },
    {
      'name': 'Austin',
      'temperature': '25º F',
      'wind': '1Kmph',
      'humidity': '5%'
    },
    {
      'name': 'Denver',
      'temperature': '30º F',
      'wind': '8Kmph',
      'humidity': '48%'
    }
  ];

  onSave(event?: MouseEvent) {
    console.log(event);
    const evtMsg = event ? ' Event target is ' + (event.target as HTMLElement).textContent : '';
    alert('Saved.' + evtMsg);
    if (event) {
      event.stopPropagation();
    }
  }

  deleteItem(item: Item) {
    alert(`Delete the ${item.name}.`);
  }

  onClickMe(event?: MouseEvent) {
    console.log(event);
    const evtMsg = event ? ' Event target class is ' + (event.target as HTMLElement).className : '';
    alert('Click me.' + evtMsg);
  }

  getValue(target: EventTarget): string {
    console.log(target);
    return (target as HTMLInputElement).value;
  }
}
