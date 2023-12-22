import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Account } from 'src/app/domain/account/account';
import { AccountLineService } from 'src/app/service/account-line.service';

@Component({
  selector: 'app-account-sum',
  templateUrl: './account-sum.component.html',
  styleUrls: ['./account-sum.component.css'],
  standalone: true,
  imports: [CurrencyPipe]
})
export class AccountSumComponent implements OnInit, OnChanges{

  sum: number = 0;
  @Input() account?: Account;

  constructor(private accountLineService: AccountLineService) {}

  ngOnInit(): void {
    this.calculateSum();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.calculateSum();
  }
  private calculateSum() : void {
    if(this.account){
      this.accountLineService.sumAccountLinesByAccount(this.account)
      .subscribe(sumAccount => {
        this.sum = sumAccount.sum
      });
    }
  }
}
