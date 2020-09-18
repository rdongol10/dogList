import { Component, OnInit } from '@angular/core';
import { IDog } from './dogs';
import { DogServiceService } from './dog-service.service';
@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {
  set filteredBy(value: string) {
    this._filteredBy = value;
    this.filteredDogs = this._filteredBy ? this.performfilter(this.filteredBy) : this.dogs;
  }
  // tslint:disable-next-line: adjacent-overload-signatures
  get filteredBy(): string {
    return this._filteredBy;
  }
  constructor(private dogService: DogServiceService) { }
  // tslint:disable-next-line: variable-name
  _filteredBy: string;
  errorMessage: string;

  // tslint:disable-next-line: member-ordering
  filteredDogs: IDog[];
  dogs: IDog[];

  performfilter(value: string): IDog[] {
    value = value.toLowerCase();
    return this.dogs.filter((dog: IDog) => dog.name.toLowerCase().includes(value));
  }

  ngOnInit(): void {
    this.getDogs();
  }

  getDogs(): void {
    this.dogService.getDogs().subscribe({
      next: dogs => {
        this.dogs = dogs;
        this.filteredDogs = this.dogs;
      },
      error: error => this.errorMessage = 'No Dogs'

    });
  }

  deleteDog(id: number): void {
    this.dogService.deleteDog(id).subscribe({
      next: () => {
        this.getDogs();
      },
      error: err => this.errorMessage = 'Eror while deleting the dog'
    });
  }
}
