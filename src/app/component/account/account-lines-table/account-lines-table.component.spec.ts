import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountLinesTableComponent } from './account-lines-table.component';

describe('AccountLinesTableComponent', () => {
  let component: AccountLinesTableComponent;
  let fixture: ComponentFixture<AccountLinesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountLinesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountLinesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
