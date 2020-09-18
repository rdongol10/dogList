import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DogServiceService } from './dog-service.service';
import { IDog } from './dogs';

@Component({
  selector: 'app-create-dog',
  templateUrl: './create-dog.component.html',
  styleUrls: ['./create-dog.component.css']
})
export class CreateDogComponent implements OnInit {

  dog: IDog;
  errorMessage;
  id: number;
  constructor(private router: Router, private route: ActivatedRoute, private dogService: DogServiceService, private fb: FormBuilder) { }
  dogFormGroup: FormGroup;

  ngOnInit(): void {

    this.dogFormGroup = this.fb.group({
      owner: ['', Validators.required],
      address: ['', Validators.required],
      name: ['', Validators.required],
      breed: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]]
    });
    this.route.params.subscribe(
      params => {
        this.id = +params.id;
        this.getDog(+params.id);
      }
    );


  }

  getDog(id: number): void {
    if (id === 0) {
      this.dog = {
        name: null,
        breed: null,
        age: null,
        address: null,
        owner: null,
        id: 0
      };
      this.onDogLoadComplete();
      return;
    }
    this.dogService.getDog(id).subscribe({
      next: dog => {
        this.dog = dog;
        this.onDogLoadComplete();
      },
      error: err => this.errorMessage = 'No Dog was found'

    });
  }

  onDogLoadComplete(): void {
    this.dogFormGroup.setValue({
      name: this.dog.name,
      breed: this.dog.breed,
      age: this.dog.age,
      address: this.dog.address,
      owner: this.dog.owner,
    });

  }

  cancel(): void {
    this.router.navigate(['/dogs']);
  }

  saveDog(): void {
    const saveDog = { ...this.dog, ...this.dogFormGroup.value };

    if (saveDog.id === 0) {

      this.dogService.saveDog(saveDog).subscribe({
        next: () => {
          this.router.navigate(['/dogs']);
        },
        error: err => this.errorMessage = 'Error while saving the dog'

      });
    } else if (saveDog.id > 0) {
      this.dogService.updateDog(saveDog, this.id).subscribe({
        next: () => {
          this.router.navigate(['/dogs']);
        },
        error: err => this.errorMessage = 'Error while saving the dog'

      });
    }
  }

}
