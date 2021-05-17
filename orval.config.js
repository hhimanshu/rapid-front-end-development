module.exports = {
  businesses: {
    output: {
      mode: 'tags-split',
      target: 'src/api/interface.ts',
      schemas: 'src/openapi/model',
      client: 'react-query',
      mock: true,
    },
    input: {
      target: './src/openapi/spec.yaml',
    },
  },
};
