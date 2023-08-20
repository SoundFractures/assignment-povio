import apiClient from '~/utils/apiClient'

const userApi = (authToken: string = '') => {
  const getMe = () => {
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
  const getFlowers = async () => {
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
