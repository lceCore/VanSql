import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-person',
  styleUrls: ['./person.component.scss'],
  templateUrl: './person.component.html'
})
export class PersonComponent implements OnInit{
  @Input() person: string;
  
  ngOnInit(): void {
    console.log(this.person);
  }
}
