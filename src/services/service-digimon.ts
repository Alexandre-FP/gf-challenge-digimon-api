import axios, { AxiosInstance, AxiosResponse } from 'axios'

export interface Digimon {
  name: string
  img: string
  level: string
}

export const service: AxiosInstance = axios.create({
  baseURL: 'https://digimon-api.vercel.app/api/digimon',
})

export const getDigimonList = async (): Promise<Digimon[]> => {
  const response: AxiosResponse<Digimon[]> = await service.get('/')
  return response.data
}
