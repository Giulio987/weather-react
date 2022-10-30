import { useCallback, useState } from 'react';

export interface RequestMethod {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers: {
    [key: string]: string;
  };
  body: any;
}
/**
 * @author Giulio Milani
 * @description Hook to fetch requests TODO: CAPIRE SE RIMUOVERLO
 */
const useHttp = (applyData: Function) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (requestConfig: RequestMethod) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method ?? 'GET',
          headers: requestConfig.headers ?? {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        });
        if (!response.ok) {
          throw new Error('Request failed');
        }
        const data = await response.json();
        applyData(data);
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
      }
      setIsLoading(false);
    },
    [applyData]
  ); //useCallback to avoid re-render (even on applyData)
  return { isLoading, error, sendRequest };
};

export default useHttp;
