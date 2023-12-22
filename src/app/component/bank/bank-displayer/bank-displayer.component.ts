import { Component, Input, OnInit } from '@angular/core';
import { Bank } from 'src/app/domain/bank/bank';
import { BankService } from 'src/app/service/bank.service';

@Component({
  selector: 'app-bank-displayer',
  templateUrl: './bank-displayer.component.html',
  styleUrls: ['./bank-displayer.component.css'],
  standalone: true
})
export class BankDisplayerComponent implements OnInit {

  bank: Bank = new Bank()
  @Input() link?: string

  constructor(private bankService: BankService){}

  ngOnInit(): void {
      if(this.link){
        this.bankService.findOne(this.link).subscribe(bank => this.bank = bank);
      }
  }
}
