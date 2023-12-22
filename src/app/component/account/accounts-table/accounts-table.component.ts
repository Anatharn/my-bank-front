import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTable, MatTableModule } from '@angular/material/table';
import { Account } from 'src/app/domain/account/account';
import { AccountService } from 'src/app/service/account.service';
import { AccountAddComponent } from '../account-add/account-add.component';
import { ConfirmDialogComponent } from '../../common/confirm-dialog/confirm-dialog.component';
import {
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';
import { BankDisplayerComponent } from '../../bank/bank-displayer/bank-displayer.component';
import { CategoryDisplayerComponent } from '../../category/category-displayer/category-displayer.component';

@Component({
  selector: 'app-accounts-table',
  templateUrl: './accounts-table.component.html',
  styleUrls: ['./accounts-table.component.css'],
  standalone: true,
  imports: [BankDisplayerComponent, CategoryDisplayerComponent, MatButtonModule, MatPaginatorModule, MatTableModule, MatIconModule, MatDialogModule]
})
export class AccountsTableComponent implements OnInit{

  accounts: Account[] = []
  displayedColumns: string[] = ["name", "code", "bank", "category", "action"]
  pageSize: number = 5
  pageIndex: number = 0
  totalElements: number = 0

  @ViewChild(MatTable) table!: MatTable<Account>
  @Output() editAccountEvent = new EventEmitter<Account>()

  constructor(private accountService: AccountService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadData()      
  }

  edit(account: Account): void {
    this.editAccountEvent.emit(account)
  }

  delete(account: Account): void{
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {});
    dialogRef.componentInstance.title = `Suppression du compte: ${account.name}`
    dialogRef.componentInstance.message = `Souhaitez-vous supprimer la compte: ${account.name}? Cette suppression entraîne la suppression de toutes les lignes qui lui sont associées.`
  
    dialogRef.afterClosed().subscribe(result => {
      if(result === 'yes' ){
        this.accountService.delete(account).subscribe(response => this.loadData())
      }
    });
  }

  page(pageEvent: PageEvent): void{
    this.pageIndex = pageEvent.pageIndex
    this.pageSize = pageEvent.pageSize
    this.loadData()
  }

  loadData(): void {
    this.accountService.findAll().subscribe(response => {
      this.accounts = response._embedded["accounts"]
      if(this.table){
        this.table.renderRows()
      }
    })
  }
}
