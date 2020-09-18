import { Component, OnInit } from '@angular/core';
import { IDog } from '../dogs';
import { DogServiceService } from '../dog-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.css']
})
export class DogDetailsComponent implements OnInit {

  dog: IDog;
  pageTitle: string;
  errorMessage: string;
  constructor(private route: ActivatedRoute, private router: Router, private dogService: DogServiceService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dogService.getDog(id).subscribe({
      next: d => {
        this.dog = d;
        this.pageTitle = this.dog.name;
      },

      error: error => {
       this.errorMessage = 'No dog was found';
      }
    });
  }

  onBack(): void {
    this.router.navigate(['/dogs']);
  }

}
