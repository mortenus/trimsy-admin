const defaultEndpoint = `http://localhost:3001`;

export default function checkApiEndpoint(): string {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const endpoint = isDevelopment
    ? process.env.NEXT_PUBLIC_API_ENDPOINT_DEV
    : process.env.NEXT_PUBLIC_API_ENDPOINT;

  return endpoint || defaultEndpoint;
}
