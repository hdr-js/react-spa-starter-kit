export const apiConstants = ['REQUEST', 'SUCCESS', 'FAILURE'];

export const createConstants = (namespace, prefix = null) => (...constants) => {
  return constants.reduce(
    (result, constant) => ({
      [constant.toUpperCase()]: `${namespace}/${
        prefix ? `${prefix.toUpperCase()}_` : ''
      }${constant.toUpperCase()}`,
      ...result,
    }),
    {},
  );
};

export const createApiConstants = (namespace, prefix) => {
  return createConstants(namespace, prefix)(...apiConstants);
};
