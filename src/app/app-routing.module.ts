import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';

const routes: Routes = [

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
