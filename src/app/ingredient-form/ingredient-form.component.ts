import { Component } from '@angular/core';
import { Ingredient } from '../ingredients/ingredient';
import { NgForm } from '@angular/forms';
import { RecipeSearchService } from '../recipe-search.service';
import { Recipe } from '../recipe/recipe';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})


export class IngredientFormComponent {
  ingredients: Ingredient[] = [];
  name = '';
  ingredient = new Ingredient(name);
  submitted = false;
  selectedRecipe: Recipe;
  recipes: Recipe[];;
  

  constructor(
    private recipeService: RecipeSearchService
  ) { }

  onSubmit() { this.submitted = true; }
  
  addIngredient(name){
    let ingredient = new Ingredient(name);
    this.ingredients.push(ingredient);
    this.submitted=true;
  }

  deleteIngredient(ingredient) {
    let index = this.ingredients.indexOf(ingredient);
    this.ingredients.splice(index,1);
    if(this.ingredients.length===0) {
      this.submitted=false;
    }
  }

  onSelect(recipe: Recipe) {
    this.selectedRecipe=recipe;
  }

  getRecipes(){
    this.recipeService.getRecipes(this.ingredients)
            .subscribe(data=>
              this.recipes=data);
  }
 


}
