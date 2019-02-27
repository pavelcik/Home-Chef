import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Recipe } from './recipe/recipe';
import { Observable } from 'rxjs';
import { Ingredient } from './ingredients/ingredient';




@Injectable({
  providedIn: 'root'
})
export class RecipeSearchService {

  private recipeUrl="https://www.food2fork.com/api/search";
  private key : string = "344ee0f57d394209de80b729f07d5f6f";
  
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });



  constructor(
    private http: HttpClient
  ) { }


  getRecipes(ingredients): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipeUrl, { headers: this.headers, params: new HttpParams().set("key", this.key)
    .set("q", ingredients.map(a => a.name).join(',')) });
  }

  

}
