/* tslint:disable */
/* eslint-disable */
/**
 * ProductPlanner API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Ingredient,
    IngredientFromJSON,
    IngredientFromJSONTyped,
    IngredientToJSON,
} from './';

/**
 * 
 * @export
 * @interface Recipe
 */
export interface Recipe {
    /**
     * 
     * @type {number}
     * @memberof Recipe
     */
    id: number;
    /**
     * 
     * @type {Array<Ingredient>}
     * @memberof Recipe
     */
    ingridients?: Array<Ingredient>;
    /**
     * 
     * @type {string}
     * @memberof Recipe
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof Recipe
     */
    image?: string;
}

export function RecipeFromJSON(json: any): Recipe {
    return RecipeFromJSONTyped(json, false);
}

export function RecipeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Recipe {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'ingridients': !exists(json, 'ingridients') ? undefined : ((json['ingridients'] as Array<any>).map(IngredientFromJSON)),
        'title': json['title'],
        'image': !exists(json, 'image') ? undefined : json['image'],
    };
}

export function RecipeToJSON(value?: Recipe | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'ingridients': value.ingridients === undefined ? undefined : ((value.ingridients as Array<any>).map(IngredientToJSON)),
        'title': value.title,
        'image': value.image,
    };
}


