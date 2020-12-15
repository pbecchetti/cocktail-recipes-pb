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

    return this.db.list<Recipe>('recipes').snapshotChanges()
      .pipe(
        map(recipes => recipes.map((msg) => ({
          key: msg.payload.key, ...msg.payload.val()
        }))
        ),
        map(recipes => {
          recipes.forEach(element => {
            console.log(element)
            // if (element.name === 'plop') { element.name = 'new' }
          })
          console.log('COME ON')
          return recipes
        }
        )
      )
  }
}
