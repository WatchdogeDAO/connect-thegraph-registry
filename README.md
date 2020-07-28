# Curated List Subgraph + Connector.
A custom subgraph and connector for DAOs to manage and query a curated list of elements.

## Usage

```js
const myorg = await connect('myorg', {
  connector: new ConnectorTheGraph({
    daoSubgraphUrl: 'http://…',
    appSubgraphUrl: repoId => {
      return 'http://…'
    },
  }),
})
```
