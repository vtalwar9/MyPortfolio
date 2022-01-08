import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainwebsiteComponent } from './mainwebsite.component';

describe('MainwebsiteComponent', () => {
  let component: MainwebsiteComponent;
  let fixture: ComponentFixture<MainwebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainwebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainwebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
