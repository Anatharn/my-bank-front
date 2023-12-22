import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { AccountLine } from 'src/app/domain/account/account-line';
import { AccountLineService } from 'src/app/service/account-line.service';
import { MatTable, MatTableModule } from '@angular/material/table';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Account } from 'src/app/domain/account/account';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-account-lines-table',
  templateUrl: './account-lines-table.component.html',
  styleUrls: ['./account-lines-table.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatPaginatorModule, MatTableModule, MatIconModule, CurrencyPipe, DatePipe ]
})
export class AccountLinesTableComponent implements OnChanges{

  @Input() account: Account = new Account();
  accountLines: AccountLine[] = [] 
  displayedColumns: string[] = ["date", "details", "amount", "action"]
  pageSize: number = 5
  pageIndex: number = 0
  totalElements: number = 0

  @ViewChild(MatTable) table!: MatTable<AccountLine>

  constructor(private accountLineService: AccountLineService){}

  ngOnChanges(changes: SimpleChanges): void {
      this.loadData()
  }
  loadData() {
    if(this.account.id){
      this.accountLineService.findByAccountId(this.account.id, this.pageIndex, this.pageSize)
      .subscribe(response => {
        console.log(response)
        this.accountLines = response._embedded['accountLines']
        this.totalElements = response.page.totalElements;
      })
      if(this.table){
        this.table.renderRows()
      }
    }
  }
  delete(accountLine: AccountLine) {
    this.accountLineService.delete(accountLine).subscribe(accountLine => this.loadData())
  }
  page(pageEvent: PageEvent) {
    this.pageIndex = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize
    this.loadData()
  }
}
