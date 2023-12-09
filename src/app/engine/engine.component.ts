import {Component, ElementRef, OnInit, Output, ViewChild} from '@angular/core';
import { PEOPLE, Person } from '../data/people';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-engine',
  styleUrls: ['./engine.component.scss'],
  templateUrl: './engine.component.html'
})
export class EngineComponent implements OnInit {
  readonly SQL_INJECTION: string[] = ['OR 1 = 1', 'OR 1=1', 'or 1=1', 'or1=1', 'OR1=1', 'Or 1=1', 'Or 1 = 1', 'Or1=1'];
  text: string = '';
  isStupid: boolean;

  people: Person[] = PEOPLE;
  peopleFiltered: Person[] = [];
  didCrack: boolean;


  ngOnInit(): void {
    this.peopleFiltered = this.people;
  }

  filterPepole(): void {
    if (this.SQL_INJECTION.find(preset => this.text.includes(preset))) {
      this.didCrack = true;
    }
    this.peopleFiltered = this.text !== '' ? this.people.filter(person => person.name.includes(this.text)) : this.people;

    setTimeout(() => this.isStupid = true, 15000);
  }
}
