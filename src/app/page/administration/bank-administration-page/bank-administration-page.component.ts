import { Component, ViewChild } from '@angular/core';
import { BankAddComponent } from 'src/app/component/bank/bank-add/bank-add.component';
import { BanksTableComponent } from 'src/app/component/bank/banks-table/banks-table.component';
import { Bank } from 'src/app/domain/bank/bank';

@Component({
  selector: 'app-bank-administration-page',
  templateUrl: './bank-administration-page.component.html',
  styleUrls: ['./bank-administration-page.component.css'],
  standalone: true,
  imports: [BankAddComponent, BanksTableComponent]
})
export class BankAdministrationPageComponent {

  @ViewChild(BanksTableComponent) banksTableComponent!: BanksTableComponent

  addBank(bank: Bank) {
      this.banksTableComponent.loadData();
  }
}
