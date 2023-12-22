import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/domain/account/account';
import { AccountService } from 'src/app/service/account.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  accounts: Account[] = []

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
      this.accountService.findAll()
      .subscribe(response => {
        console.log(response)
        this.accounts = response._embedded['accounts'];
      })
  }
}
