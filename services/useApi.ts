import apiClient from '~/utils/apiClient'
import { GetFlowersResponse } from '~/utils/models/Flower.model'
import { GetMeResponse } from '~/utils/models/User.model'

const userApi = (authToken: string = '') => {
  const getMe = (): Promise<GetMeResponse> => {
    const config = {
      method: 'GET',
      url: '/users/me',
    }
    return apiClient(config, authToken)
      .then((res) => res.data)
      .catch((err) => err)
  }

  return {
    getMe,
  }
}

const flowerApi = (authToken: string) => {
  const getFlowers = async (): Promise<GetFlowersResponse> => {
    const config = {
      method: 'GET',
      url: '/flowers',
    }
    return apiClient(config, authToken)
      .then((res) => res.data)
      .catch((err) => err)
  }

  return {
    getFlowers,
  }
}

const useApi = (authToken: string) => ({
  flower: flowerApi(authToken),
  user: userApi(authToken),
})

export default useApi
