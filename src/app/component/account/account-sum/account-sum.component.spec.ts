import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSumComponent } from './account-sum.component';

describe('AccountSumComponent', () => {
  let component: AccountSumComponent;
  let fixture: ComponentFixture<AccountSumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
