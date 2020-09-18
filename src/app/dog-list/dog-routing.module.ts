import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateDogComponent } from './create-dog.component';
import { DogDetailsComponent } from './dog-details/dog-details.component';
import { DogListComponent } from './dog-list.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'dogs', component: DogListComponent },
      { path: 'dogs/:id', component: DogDetailsComponent },
      { path: 'createDog/:id', component: CreateDogComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class DogRoutingModule {

}
