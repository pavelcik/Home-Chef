import { Component, OnInit, NgModule } from '@angular/core';
import { Recipe } from './recipe';
import { RecipeSearchService } from '../recipe-search.service';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})

export class RecipeComponent implements OnInit {

  selectedRecipe: Recipe;
  recipes: Recipe[];
  

  constructor(
    private recipeService: RecipeSearchService
  ) { }

  ngOnInit() {
  }

  onSelect(recipe: Recipe) {
    this.selectedRecipe=recipe;
  }

  // getRecipes(): void{
  //   this.recipeService.getRecipes();
  // }


  

}
