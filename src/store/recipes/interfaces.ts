import { Recipe } from '../../api/models';

export interface IRecipes {
  isLoading: boolean;
  recipes: { [key: number]: Recipe };
}
