import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from 'src/app/domain/category/category';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-categories-table',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatPaginatorModule, MatTableModule],
  templateUrl: './categories-table.component.html',
  styleUrls: ['./categories-table.component.css']
})
export class CategoriesTableComponent implements OnInit{

  categories: Category[] = []
  displayedColumns: string[] = ["name", "action"]
  pageSize: number = 5
  pageIndex: number = 0
  totalElements: number = 0

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadData()
  }

  delete(category: Category): void {
    this.categoryService.delete(category).subscribe(category => {
      this.loadData()
    })
  }

  page(pageEvent: PageEvent): void {}

  loadData() : void {
    this.categoryService.findAll().subscribe(response => {
      this.categories = response._embedded['categories']
    })
  }

}
