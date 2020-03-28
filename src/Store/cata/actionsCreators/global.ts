export const setLoading = (type: string, isLoading: boolean) => {
  return {
    type,
    value: {
      isLoading,
    },
  };
};

export const setError = (type: string, isError: boolean) => {
  return {
    type,
    value: {
      isError,
    },
  };
};
