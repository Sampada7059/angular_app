import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolincardsComponent } from './violincards.component';

describe('ViolincardsComponent', () => {
  let component: ViolincardsComponent;
  let fixture: ComponentFixture<ViolincardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViolincardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolincardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
