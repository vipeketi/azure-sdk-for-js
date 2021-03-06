/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/virtualHubIpConfigurationMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a VirtualHubIpConfiguration. */
export class VirtualHubIpConfiguration {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a VirtualHubIpConfiguration.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves the details of a Virtual Hub Ip configuration.
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param ipConfigName The name of the ipconfig.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualHubIpConfigurationGetResponse>
   */
  get(resourceGroupName: string, virtualHubName: string, ipConfigName: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualHubIpConfigurationGetResponse>;
  /**
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param ipConfigName The name of the ipconfig.
   * @param callback The callback
   */
  get(resourceGroupName: string, virtualHubName: string, ipConfigName: string, callback: msRest.ServiceCallback<Models.HubIpConfiguration>): void;
  /**
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param ipConfigName The name of the ipconfig.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, virtualHubName: string, ipConfigName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.HubIpConfiguration>): void;
  get(resourceGroupName: string, virtualHubName: string, ipConfigName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.HubIpConfiguration>, callback?: msRest.ServiceCallback<Models.HubIpConfiguration>): Promise<Models.VirtualHubIpConfigurationGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualHubName,
        ipConfigName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.VirtualHubIpConfigurationGetResponse>;
  }

  /**
   * Creates a VirtualHubIpConfiguration resource if it doesn't exist else updates the existing
   * VirtualHubIpConfiguration.
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param ipConfigName The name of the ipconfig.
   * @param parameters Hub Ip Configuration parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualHubIpConfigurationCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, virtualHubName: string, ipConfigName: string, parameters: Models.HubIpConfiguration, options?: msRest.RequestOptionsBase): Promise<Models.VirtualHubIpConfigurationCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,virtualHubName,ipConfigName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VirtualHubIpConfigurationCreateOrUpdateResponse>;
  }

  /**
   * Deletes a VirtualHubIpConfiguration.
   * @param resourceGroupName The resource group name of the VirtualHubBgpConnection.
   * @param virtualHubName The name of the VirtualHub.
   * @param ipConfigName The name of the ipconfig.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, virtualHubName: string, ipConfigName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,virtualHubName,ipConfigName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Retrieves the details of all VirtualHubIpConfigurations.
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualHubIpConfigurationListResponse>
   */
  list(resourceGroupName: string, virtualHubName: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualHubIpConfigurationListResponse>;
  /**
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param callback The callback
   */
  list(resourceGroupName: string, virtualHubName: string, callback: msRest.ServiceCallback<Models.ListVirtualHubIpConfigurationResults>): void;
  /**
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, virtualHubName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListVirtualHubIpConfigurationResults>): void;
  list(resourceGroupName: string, virtualHubName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ListVirtualHubIpConfigurationResults>, callback?: msRest.ServiceCallback<Models.ListVirtualHubIpConfigurationResults>): Promise<Models.VirtualHubIpConfigurationListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualHubName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.VirtualHubIpConfigurationListResponse>;
  }

  /**
   * Creates a VirtualHubIpConfiguration resource if it doesn't exist else updates the existing
   * VirtualHubIpConfiguration.
   * @param resourceGroupName The resource group name of the VirtualHub.
   * @param virtualHubName The name of the VirtualHub.
   * @param ipConfigName The name of the ipconfig.
   * @param parameters Hub Ip Configuration parameters.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, virtualHubName: string, ipConfigName: string, parameters: Models.HubIpConfiguration, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        virtualHubName,
        ipConfigName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes a VirtualHubIpConfiguration.
   * @param resourceGroupName The resource group name of the VirtualHubBgpConnection.
   * @param virtualHubName The name of the VirtualHub.
   * @param ipConfigName The name of the ipconfig.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, virtualHubName: string, ipConfigName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        virtualHubName,
        ipConfigName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Retrieves the details of all VirtualHubIpConfigurations.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualHubIpConfigurationListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualHubIpConfigurationListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ListVirtualHubIpConfigurationResults>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListVirtualHubIpConfigurationResults>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ListVirtualHubIpConfigurationResults>, callback?: msRest.ServiceCallback<Models.ListVirtualHubIpConfigurationResults>): Promise<Models.VirtualHubIpConfigurationListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.VirtualHubIpConfigurationListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualHubs/{virtualHubName}/ipConfigurations/{ipConfigName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.virtualHubName,
    Parameters.ipConfigName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.HubIpConfiguration
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualHubs/{virtualHubName}/ipConfigurations",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.virtualHubName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListVirtualHubIpConfigurationResults
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualHubs/{virtualHubName}/ipConfigurations/{ipConfigName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.virtualHubName,
    Parameters.ipConfigName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.HubIpConfiguration,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.HubIpConfiguration
    },
    201: {
      bodyMapper: Mappers.HubIpConfiguration
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualHubs/{virtualHubName}/ipConfigurations/{ipConfigName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.virtualHubName,
    Parameters.ipConfigName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListVirtualHubIpConfigurationResults
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
