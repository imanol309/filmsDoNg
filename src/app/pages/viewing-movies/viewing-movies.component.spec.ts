import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewingMoviesComponent } from './viewing-movies.component';

describe('ViewingMoviesComponent', () => {
  let component: ViewingMoviesComponent;
  let fixture: ComponentFixture<ViewingMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewingMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewingMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
