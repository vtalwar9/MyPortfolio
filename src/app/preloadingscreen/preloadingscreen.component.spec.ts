import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloadingscreenComponent } from './preloadingscreen.component';

describe('PreloadingscreenComponent', () => {
  let component: PreloadingscreenComponent;
  let fixture: ComponentFixture<PreloadingscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreloadingscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreloadingscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
