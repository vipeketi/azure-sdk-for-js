/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const SchemaId: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SchemaId",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SchemaGetByIdHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SchemaGetByIdHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      xSerialization: {
        serializedName: "x-serialization",
        type: {
          name: "String"
        }
      },
      xSchemaId: {
        serializedName: "x-schema-id",
        type: {
          name: "String"
        }
      },
      xSchemaIdLocation: {
        serializedName: "x-schema-id-location",
        type: {
          name: "String"
        }
      },
      xSchemaVersion: {
        serializedName: "x-schema-version",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SchemaGetIdByContentHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SchemaGetIdByContentHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      xSerialization: {
        serializedName: "x-serialization",
        type: {
          name: "String"
        }
      },
      xSchemaId: {
        serializedName: "x-schema-id",
        type: {
          name: "String"
        }
      },
      xSchemaIdLocation: {
        serializedName: "x-schema-id-location",
        type: {
          name: "String"
        }
      },
      xSchemaVersion: {
        serializedName: "x-schema-version",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SchemaRegisterHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SchemaRegisterHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      xSerialization: {
        serializedName: "x-serialization",
        type: {
          name: "String"
        }
      },
      xSchemaId: {
        serializedName: "x-schema-id",
        type: {
          name: "String"
        }
      },
      xSchemaIdLocation: {
        serializedName: "x-schema-id-location",
        type: {
          name: "String"
        }
      },
      xSchemaVersion: {
        serializedName: "x-schema-version",
        type: {
          name: "Number"
        }
      }
    }
  }
};
