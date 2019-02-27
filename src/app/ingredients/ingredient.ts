import { Recipe } from '../recipe/recipe';

export class Ingredient {
    private _name: string;
    recipes: Recipe[];

    get name(): string{
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    } 

    constructor(name) {
        this._name=name;
    }


}