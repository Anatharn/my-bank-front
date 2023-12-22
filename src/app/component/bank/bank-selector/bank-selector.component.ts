import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Bank } from 'src/app/domain/bank/bank';
import { BankService } from 'src/app/service/bank.service';

@Component({
  selector: 'app-bank-selector',
  templateUrl: './bank-selector.component.html',
  styleUrls: ['./bank-selector.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, MatInputModule, CommonModule]
})
export class BankSelectorComponent implements OnInit{

  banks?: Bank[]
  @Output() onSelectBankEvent = new EventEmitter<string>()
  selectedLink?: string

  constructor(private bankService: BankService){}

  ngOnInit(): void {
      this.bankService.findAll().subscribe(response => {
        this.banks = response._embedded["banks"]
      })
  }
  selectionChange(event: any): void {
    this.onSelectBankEvent.emit(this.selectedLink)
  }
  setBankUrl(bankUrl: string): void {
    this.selectedLink = bankUrl
  }
}
