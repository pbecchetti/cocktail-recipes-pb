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
  ingredients: any[];
  ingredientsSelected = [];

  constructor(
    private recipesService: RecipesService,
  ) {
  }

  ngOnInit(): void {
    this.recipesService.getAllRecipes().subscribe(recipes => {
      this.cocktails = recipes
    }
    );

    this.recipesService.getAllIngredients().subscribe(ingredients => {
      this.ingredients = ingredients
    }
    );
  }

  selectIngredient(ingredient) {
    const index = this.ingredientsSelected.indexOf(ingredient);
    if (index > -1) {
      this.ingredientsSelected.splice(index, 1);
    } else {
      this.ingredientsSelected.push(ingredient)
    }
    console.log('ingredients', this.ingredientsSelected)
  }

}
