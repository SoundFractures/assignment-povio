import axios, { AxiosRequestConfig } from 'axios'

const apiClient = (
  config: {
    method: AxiosRequestConfig['method']
    url: AxiosRequestConfig['url']
    data?: AxiosRequestConfig['data']
  },
  authToken: string,
) => {
  // get cookie token
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
