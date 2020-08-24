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
/**
 * 
 * @export
 * @interface Ingredient
 */
export interface Ingredient {
    /**
     * 
     * @type {string}
     * @memberof Ingredient
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof Ingredient
     */
    unit: string;
    /**
     * 
     * @type {number}
     * @memberof Ingredient
     */
    value: number;
}

export function IngredientFromJSON(json: any): Ingredient {
    return IngredientFromJSONTyped(json, false);
}

export function IngredientFromJSONTyped(json: any, ignoreDiscriminator: boolean): Ingredient {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': json['title'],
        'unit': json['unit'],
        'value': json['value'],
    };
}

export function IngredientToJSON(value?: Ingredient | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'unit': value.unit,
        'value': value.value,
    };
}

