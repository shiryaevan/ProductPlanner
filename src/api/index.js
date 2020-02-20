import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
});

export const recipesApi = {
  getRecipes() {
    return instance.get('recipes').then(response => response.data);
  },
};
