import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAdministrationPageComponent } from './account-administration-page.component';

describe('AccountAdministrationPageComponent', () => {
  let component: AccountAdministrationPageComponent;
  let fixture: ComponentFixture<AccountAdministrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountAdministrationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountAdministrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
