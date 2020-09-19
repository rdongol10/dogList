import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateDogComponent } from './create-dog.component';
import { DogDetailsComponent } from './dog-details/dog-details.component';
import { DogListComponent } from './dog-list.component';
import { AuthGuardGuard } from '../guards/auth-guard.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'dogs', component: DogListComponent, canActivate: [AuthGuardGuard] },
      { path: 'dogs/:id', component: DogDetailsComponent, canActivate: [AuthGuardGuard] },
      { path: 'createDog/:id', component: CreateDogComponent, canActivate: [AuthGuardGuard] }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class DogRoutingModule {

}
