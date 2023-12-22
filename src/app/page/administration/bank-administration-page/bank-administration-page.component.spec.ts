import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAdministrationPageComponent } from './bank-administration-page.component';

describe('BankAdministrationPageComponent', () => {
  let component: BankAdministrationPageComponent;
  let fixture: ComponentFixture<BankAdministrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankAdministrationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankAdministrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
