import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountLinesUploadComponent } from './account-lines-upload.component';

describe('AccountLinesUploadComponent', () => {
  let component: AccountLinesUploadComponent;
  let fixture: ComponentFixture<AccountLinesUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountLinesUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountLinesUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
