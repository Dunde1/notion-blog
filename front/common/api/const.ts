import { UseQueryOptions } from 'react-query';

/**
 * @description use UseQueryOptions type
 * @type UseQueryOptions
 */
export const QUERY_OPTION = {
  DEFAULT: {
    refetchOnWindowFocus: false,
    retry: 1,
    retryDelay: 1000,
  },
};
