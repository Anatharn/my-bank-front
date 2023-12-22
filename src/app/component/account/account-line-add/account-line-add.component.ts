import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { AccountLine } from 'src/app/domain/account/account-line';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { Account } from 'src/app/domain/account/account';
import { AccountLineService } from 'src/app/service/account-line.service';
import { AccountLinesUploadComponent } from '../account-lines-upload/account-lines-upload.component';

@Component({
  selector: 'app-account-line-add',
  templateUrl: './account-line-add.component.html',
  styleUrls: ['./account-line-add.component.css'],
  standalone: true,
  imports: [AccountLinesUploadComponent,
    MatButtonModule, 
    MatExpansionModule, 
    MatIconModule, 
    MatInputModule, 
    MatFormFieldModule, 
    FormsModule, MatDatepickerModule, MatNativeDateModule]
})
export class AccountLineAddComponent {

  @Input() account = new Account()
  accountLine: AccountLine = new AccountLine()
  @Output() newAccountLineEvent = new EventEmitter<AccountLine>

  constructor(private accountLineService: AccountLineService) {}
  
  add():void{
    this.accountLine.account = this.account._links.self.href
    this.accountLineService.add(this.accountLine).subscribe(accountLine => {
      this.newAccountLineEvent.emit(accountLine)
      this.accountLine = new AccountLine()
    })
    
  }
}
