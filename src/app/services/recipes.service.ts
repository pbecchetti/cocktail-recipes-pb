import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Recipe } from '../entities/Recipe.entity';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(
    public db: AngularFireDatabase
  ) { }

  getAllRecipes() {

    return this.db.list<any>('recipes').snapshotChanges()
      .pipe(
        map(recipes => recipes.map((msg) => ({
          key: msg.payload.key, ...msg.payload.val()
        }))
        )
      )
  }

  getAllIngredients() {

    return this.db.list<any>('ingredients',
      ref =>
        ref.orderByChild('name')
    ).snapshotChanges()
      .pipe(
        map(ingredients => ingredients.map((msg) => ({
          key: msg.payload.key, ...msg.payload.val()
        }))
        ),
      )
  }
}
