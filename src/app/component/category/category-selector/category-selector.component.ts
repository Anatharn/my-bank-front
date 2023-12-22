import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from 'src/app/domain/category/category';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-selector',
  standalone: true,
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.css'],
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, MatInputModule, CommonModule]
})
export class CategorySelectorComponent implements OnInit{

  categories: Category[] = []
  @Output() onSelectCategoryEvent = new EventEmitter<string>()
  selectedLink?: string

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
      this.categoryService.findAll().subscribe(response => {
        this.categories = response._embedded['categories']
      })
  }
  selectionChange(event: any): void {
    this.onSelectCategoryEvent.emit(this.selectedLink)
  }
  setCategory(categoryUrl: string): void {
    this.selectedLink = categoryUrl
  }
}
