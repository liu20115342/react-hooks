import { axiosInstance } from './config'

export const getBannerRequest = () => {
  return axiosInstance.get('/banner')
}

export const getRecommendListRequest = () => {
  console.log('131412')
  return axiosInstance.get('/personalized')
}
