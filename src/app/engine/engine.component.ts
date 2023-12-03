import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { PEOPLE, Person } from '../data/people';

@Component({
  selector: 'app-engine',
  styleUrls: ['./engine.component.scss'],
  templateUrl: './engine.component.html'
})
export class EngineComponent implements OnInit {
  readonly SQL_INJECTION = 'OR 1 = 1';
  text: string = '';
  isStupid: boolean;

  people: Person[] = PEOPLE;
  peopleFiltered: Person[] = [];
  didCrack: boolean;


  ngOnInit(): void {
    this.peopleFiltered = this.people;
  }

  filterPepole(): void {
    if (this.text.includes(this.SQL_INJECTION)) {
      this.didCrack = true;
    }
    this.peopleFiltered = this.text !== '' ? this.people.filter(person => person.name.includes(this.text)) : this.people;

    setTimeout(() => this.isStupid = true, 15000);
  }
}
