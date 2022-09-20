import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarcardsComponent } from './guitarcards.component';

describe('GuitarcardsComponent', () => {
  let component: GuitarcardsComponent;
  let fixture: ComponentFixture<GuitarcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitarcardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
