import { Component, ViewChild } from '@angular/core';
import { CategoriesTableComponent } from 'src/app/component/category/categories-table/categories-table.component';
import { CategoryAddComponent } from 'src/app/component/category/category-add/category-add.component';
import { Category } from 'src/app/domain/category/category';

@Component({
  selector: 'app-category-administration-page',
  templateUrl: './category-administration-page.component.html',
  styleUrls: ['./category-administration-page.component.css'],
  standalone: true,
  imports: [CategoriesTableComponent, CategoryAddComponent]
})
export class CategoryAdministrationPageComponent {

  @ViewChild(CategoriesTableComponent) categoriesTableComponent?: CategoriesTableComponent
  
  newCategoryEvent(category: Category) {
    if(this.categoriesTableComponent){
      this.categoriesTableComponent.loadData()
    }
  }
}
