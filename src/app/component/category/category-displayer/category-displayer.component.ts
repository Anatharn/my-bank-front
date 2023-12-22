import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from 'src/app/domain/category/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-displayer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-displayer.component.html',
  styleUrls: ['./category-displayer.component.css']
})
export class CategoryDisplayerComponent  implements OnInit{

  @Input() link?: string
  category?: Category

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    if(this.link){
      this.categoryService.findOne(this.link)
        .subscribe(category => this.category = category)
    }
  }
}
