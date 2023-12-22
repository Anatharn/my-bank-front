import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountLineAddComponent } from './account-line-add.component';

describe('AccountLineAddComponent', () => {
  let component: AccountLineAddComponent;
  let fixture: ComponentFixture<AccountLineAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountLineAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountLineAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
