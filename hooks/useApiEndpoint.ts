import { useEffect, useState } from 'react';

const defaultEndpoint = `http://localhost:3001`;

const checkCurrentEndpoint = (): string => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const endpoint = isDevelopment ? process.env.API_ENDPOINT_DEV : process.env.API_ENDPOINT;

  return endpoint || defaultEndpoint;
};

const useApiEndpoint = (): string => {
  const [apiEndpoint, setApiEndpoint] = useState<string>(checkCurrentEndpoint());

  useEffect(() => {
    const isDevelopment = process.env.NODE_ENV === 'development';
    const endpoint = isDevelopment ? process.env.API_ENDPOINT_DEV : process.env.API_ENDPOINT;

    if (!endpoint) {
      console.error('ERROR: invalid API_ENDPOINT & API_ENDPOINT_DEV in .env file');
      console.error(
        `Application might not send fetch requests correctly, using deafult endpoint for requests: ${defaultEndpoint}`,
      );

      return setApiEndpoint(defaultEndpoint);
    }
    setApiEndpoint(endpoint);
  }, []);

  return apiEndpoint;
};

export default useApiEndpoint;
