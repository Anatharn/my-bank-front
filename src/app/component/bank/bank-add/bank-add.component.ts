import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Bank } from 'src/app/domain/bank/bank';
import { BankService } from 'src/app/service/bank.service';

@Component({
  selector: 'app-bank-add',
  templateUrl: './bank-add.component.html',
  styleUrls: ['./bank-add.component.css'],
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule]
})
export class BankAddComponent {

  @Output() newBankEvent = new EventEmitter<Bank>();
  bank: Bank = new Bank();

  constructor(private bankService: BankService){}

  add() {
    this.bankService.create(this.bank).subscribe(bank => {
      this.newBankEvent.emit(bank)
      this.bank = new Bank()
    })
  }
}
