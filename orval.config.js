module.exports = {
  businesses: {
    output: {
      mode: 'tags-split',
      target: 'src/openapi/generated/interface.ts',
      schemas: 'src/openapi/generated/model',
      client: 'react-query',
      mock: true,
    },
    input: {
      target: './src/openapi/spec.yaml',
    },
  },
};
