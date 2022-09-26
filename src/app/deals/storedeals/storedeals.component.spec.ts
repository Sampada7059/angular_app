import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoredealsComponent } from './storedeals.component';

describe('StoredealsComponent', () => {
  let component: StoredealsComponent;
  let fixture: ComponentFixture<StoredealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoredealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoredealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
