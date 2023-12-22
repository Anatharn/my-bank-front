import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Category } from 'src/app/domain/category/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-add',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule],
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent {

  @Output() newCategoryEvent= new EventEmitter<Category>()
  category = new Category()

  constructor(private categoryService: CategoryService){}

  add(): void {
    this.categoryService.create(this.category).subscribe(category => {
      this.newCategoryEvent.emit(category)
      this.category = new Category()
    })
  }
}
