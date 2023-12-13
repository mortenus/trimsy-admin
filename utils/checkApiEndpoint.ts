const defaultEndpoint = `http://localhost:3001`;

export default function checkApiEndpoint(): string {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const endpoint = isDevelopment
    ? process.env.NEXT_PUBLIC_API_ENDPOINT_DEV
    : process.env.NEXT_PUBLIC_API_ENDPOINT;

  if (!endpoint) {
    console.error('ERROR: invalid API_ENDPOINT & API_ENDPOINT_DEV in .env file');
    console.error(
      `Application might not send fetch requests correctly, using deafult endpoint for requests: ${defaultEndpoint}`,
    );

    return defaultEndpoint;
  };

console.error("Current endpoint: ", endpoint);

  return endpoint;
}
