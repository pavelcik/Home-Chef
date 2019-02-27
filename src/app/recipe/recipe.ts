import { Ingredient } from '../ingredients/ingredient';

export class Recipe {
    image_url: String;
	source_url: String;
	f2f_url: String;
	title: String;
	publisher: String;
	publisher_url: String;
	social_rank: String;
	ingredients: Ingredient[];
}