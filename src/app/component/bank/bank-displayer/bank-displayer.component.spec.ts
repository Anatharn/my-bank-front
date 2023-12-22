import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankDisplayerComponent } from './bank-displayer.component';

describe('BankDisplayerComponent', () => {
  let component: BankDisplayerComponent;
  let fixture: ComponentFixture<BankDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankDisplayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
