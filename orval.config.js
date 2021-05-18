module.exports = {
  businesses: {
    output: {
      mode: 'single',
      target: 'src/openapi/generated/index.ts',
      schemas: 'src/openapi/generated/model',
      client: 'react-query',
      mock: true,
    },
    input: {
      target: './src/openapi/spec.yaml',
    },
  },
};
