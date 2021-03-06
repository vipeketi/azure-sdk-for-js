// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const { SearchIndexerClient, AzureKeyCredential, SearchIndexer } = require("@azure/search-documents");
require("dotenv").config();

const endpoint = process.env.SEARCH_API_ENDPOINT || "";
const apiKey = process.env.SEARCH_API_KEY || "";

async function main() {
  console.log(`Running Get Indexer Sample....`);

  const client = new SearchIndexerClient(endpoint, new AzureKeyCredential(apiKey));
  console.log(`Getting Indexer my-azure-indexer-1`);
  const indexer = await client.getIndexer("my-azure-indexer-1");
  console.log(`Name: ${indexer.name}`);
  console.log(`Description: ${indexer.description}`);
  console.log(`Data Source Name: ${indexer.dataSourceName}`);
  console.log(`Skillset Name: ${indexer.skillsetName}`);
  console.log(`Target Index Name: ${indexer.targetIndexName}`);
  console.log(`Is Disabled: ${indexer.isDisabled}`);
  console.log(`ETag: ${indexer.etag}`);
}

main();
