import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Account } from 'src/app/domain/account/account';
import { AccountService } from 'src/app/service/account.service';
import { BankSelectorComponent } from '../../bank/bank-selector/bank-selector.component';
import { Bank } from 'src/app/domain/bank/bank';
import { CommonModule } from '@angular/common';
import { BankService } from 'src/app/service/bank.service';
import { Links } from 'src/app/domain/hal/links';
import { Link } from 'src/app/domain/hal/link';
import { CategorySelectorComponent } from '../../category/category-selector/category-selector.component';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-account-add',
  templateUrl: './account-add.component.html',
  styleUrls: ['./account-add.component.css'],
  standalone: true,
  imports: [CommonModule, 
    CategorySelectorComponent,
    MatButtonModule, 
    MatExpansionModule, 
    MatFormFieldModule, 
    MatIconModule, 
    FormsModule, 
    MatInputModule, 
    BankSelectorComponent]
})
export class AccountAddComponent {

  @Output() newAccountEvent: EventEmitter<Account> = new EventEmitter<Account>()
  @ViewChild(MatAccordion) accordion?: MatAccordion
  @ViewChild(BankSelectorComponent) bankSelectorComponent?: BankSelectorComponent
  @ViewChild(CategorySelectorComponent) categorySelectorComponent?: CategorySelectorComponent
  account: Account = new Account()

  constructor(private accountService: AccountService, 
    private bankService: BankService,
    private categoryService: CategoryService) {}

  add(): void {
    this.accountService.create(this.account).subscribe(account => {
      this.newAccountEvent.emit(account);
    })
  }
  edit(): void {
    this.accountService.update(this.account).subscribe(account => {
      this.newAccountEvent.emit(account)
    })
  }
  onSelectBankEvent(bankLink: string): void {
    this.account.bank = bankLink
  }
  onSelectCategoryEvent(categoryLink: string): void {
    this.account.category = categoryLink
  }
  setAccount(account: Account): void {
    this.account = account

    this.bankService.findOne(account._links['bank'].href)
      .subscribe(bank => {
        this.account.bank = bank._links.self.href
        this.bankSelectorComponent?.setBankUrl(bank._links.self.href)
      })
    
    this.categoryService.findOne(account._links['category'].href)
      .subscribe(category => {
        this.account.category = category._links.self.href
        this.categorySelectorComponent?.setCategory(category._links.self.href)
      })
  }
  open(): void{
    this.accordion?.openAll()
  }
}
