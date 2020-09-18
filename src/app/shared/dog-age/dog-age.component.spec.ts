import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogAgeComponent } from './dog-age.component';

describe('DogAgeComponent', () => {
  let component: DogAgeComponent;
  let fixture: ComponentFixture<DogAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
