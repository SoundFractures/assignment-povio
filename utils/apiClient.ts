import axios, { AxiosRequestConfig } from 'axios'

type ApiClientConfig = {
  method: AxiosRequestConfig['method']
  url: AxiosRequestConfig['url']
  data?: AxiosRequestConfig['data']
}
// Client to use in each API request
const apiClient = (config: ApiClientConfig, authToken: string) => {
  const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: authToken ? `Bearer ${authToken}` : '',
    },
  })
  return client(config)
}

export default apiClient
