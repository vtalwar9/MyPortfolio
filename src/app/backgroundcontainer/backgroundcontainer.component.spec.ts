import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundcontainerComponent } from './backgroundcontainer.component';

describe('BackgroundcontainerComponent', () => {
  let component: BackgroundcontainerComponent;
  let fixture: ComponentFixture<BackgroundcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundcontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
