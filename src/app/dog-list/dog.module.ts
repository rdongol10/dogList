import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogListComponent } from './dog-list.component';
import { DogRoutingModule } from './dog-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DogDetailsComponent } from './dog-details/dog-details.component';
import { DogPrefixPipe } from './dog-prefix.pipe';
import { DogAgeComponent } from '../shared/dog-age/dog-age.component';
import { CreateDogComponent } from './create-dog.component';


@NgModule({
  declarations: [
    DogListComponent,
    DogDetailsComponent,
    DogPrefixPipe,
    DogAgeComponent,
    CreateDogComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DogRoutingModule,
    HttpClientModule
  ],
  exports: [
    DogRoutingModule
  ]
})
export class DogModule { }
