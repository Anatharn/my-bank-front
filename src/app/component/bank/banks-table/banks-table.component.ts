import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { Bank } from 'src/app/domain/bank/bank';
import { BankService } from 'src/app/service/bank.service';

@Component({
  selector: 'app-banks-table',
  templateUrl: './banks-table.component.html',
  styleUrls: ['./banks-table.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatPaginatorModule, MatTableModule]
})
export class BanksTableComponent implements OnInit{

  banks: Bank[] = []
  displayedColumns: string[] = ["name", "action"]
  pageSize: number = 5
  pageIndex: number = 0
  totalElements: number = 0

  constructor(private bankService: BankService) {}

  ngOnInit(): void {
    this.loadData()    
  } 

  loadData(): void {
    this.bankService.findAll().subscribe(response => {
      this.banks = response._embedded['banks']
    })
  }
  delete(bank: Bank): void{

  }
  page(pageEvent: PageEvent) : void{
    this.pageIndex = pageEvent.pageIndex
    this.pageSize = pageEvent.pageSize
    this.loadData()
  }
}
