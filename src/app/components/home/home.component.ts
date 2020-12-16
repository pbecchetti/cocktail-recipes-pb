import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cocktails: any[];
  items: Observable<any[]>;

  constructor(
    private recipesService: RecipesService,
  ) {
  }

  ngOnInit(): void {
    this.recipesService.getAllRecipes().subscribe(recipes => {
      this.cocktails = recipes
      console.log('rec', recipes)
    }

    );

  }

}
