import {Component, Input, OnInit} from '@angular/core';
import { Person } from '../data/people';

@Component({
  selector: 'app-person',
  styleUrls: ['./person.component.scss'],
  templateUrl: './person.component.html'
})
export class PersonComponent implements OnInit{
  @Input() person: Person;
  
  ngOnInit(): void {
    console.log(this.person);
  }
}
