/* tslint:disable */
/* eslint-disable */
/**
 * Businesses API
 * Information about businesses
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';
import { Business, BusinessFromJSON, BusinessToJSON } from '../models';

/**
 *
 */
export class DefaultApi extends runtime.BaseAPI {
  /**
   * Returns a random business from a list of 50 businesses
   */
  async businessRandomGetRaw(): Promise<runtime.ApiResponse<Business>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/business/random`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, jsonValue =>
      BusinessFromJSON(jsonValue)
    );
  }

  /**
   * Returns a random business from a list of 50 businesses
   */
  async businessRandomGet(): Promise<Business> {
    const response = await this.businessRandomGetRaw();
    return await response.value();
  }

  /**
   * Returns 50 businesses
   */
  async businessesGetRaw(): Promise<runtime.ApiResponse<Array<Business>>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/businesses`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, jsonValue =>
      jsonValue.map(BusinessFromJSON)
    );
  }

  /**
   * Returns 50 businesses
   */
  async businessesGet(): Promise<Array<Business>> {
    const response = await this.businessesGetRaw();
    return await response.value();
  }
}