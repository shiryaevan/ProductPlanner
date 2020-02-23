interface IIngredient {
  title: string;
  count: string;
}

export interface IRecipe {
  id: number;
  title: string;
  image?: string;
  ingredients?: IIngredient[];
}

export interface IRecipes {
  isLoading: boolean;
  recipes: IRecipe[];
}
