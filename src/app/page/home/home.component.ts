import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterLink } from '@angular/router';
import { AccountSumComponent } from 'src/app/component/account/account-sum/account-sum.component';
import { BankDisplayerComponent } from 'src/app/component/bank/bank-displayer/bank-displayer.component';
import { Account } from 'src/app/domain/account/account';
import { AccountService } from 'src/app/service/account.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [AccountSumComponent, CommonModule, BankDisplayerComponent, MatGridListModule, MatCardModule, RouterLink]
})
export class HomeComponent implements OnInit{

  accounts: Account[] = []

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
      this.accountService.findAll()
      .subscribe(response => {
        console.log(response)
        this.accounts = response._embedded['accounts'];
        console.log(this.accounts)
      })
  }
}
