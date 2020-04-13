export interface IIngredient {
  title: string;
  value: number | string;
  unit?: string;
}

export interface IRecipe {
  id: number;
  title: string;
  image?: string;
  ingredients?: IIngredient[];
}

export interface IRecipes {
  isLoading: boolean;
  recipes: { [key: number]: IRecipe };
}
