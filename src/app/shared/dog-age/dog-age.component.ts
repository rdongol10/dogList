import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dog-age',
  templateUrl: './dog-age.component.html',
  styleUrls: ['./dog-age.component.css']
})
export class DogAgeComponent implements OnInit {

  @Input() age:number;
  constructor() { }

  ngOnInit(): void {
  }

  counterOfAge() {
    return new Array(this.age);
}
}
