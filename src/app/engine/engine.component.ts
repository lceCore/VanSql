import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-engine',
  styleUrls: ['./engine.component.scss'],
  templateUrl: './engine.component.html'
})
export class EngineComponent {
  readonly SQL_INJECTION = 'OR 1 = 1';
  text: string = '';
  isStupid: boolean;

  people: string[] = ['Eye', 'אוכל', 'עמית', 'מוחמד', 'פטריק', 'שניצל'];
  peopleFiltered: string[] = ['Eye', 'אוכל', 'עמית', 'מוחמד', 'פטריק', 'שניצל'];
  didCrack: boolean;

  filterPepole(): void {
    if (this.text.includes(this.SQL_INJECTION)) {
      this.didCrack = true;
    }
    this.peopleFiltered = this.text !== '' ? this.people.filter(person => person.includes(this.text)) : this.people;

    setTimeout(() => this.isStupid = true, 15000);
  }
}
