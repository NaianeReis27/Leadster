import { ReactNode, useState, createContext, useEffect } from 'react'
import api from '../services/axiosClient'
import { ApiResponse } from '../interfaces/api.interfaces'

export interface ApiContextData {
  videos: ApiResponse
  getVideos: (page: number) => void
}

export interface ApiContextProps {
  children: ReactNode
}

export const ApiContext = createContext<ApiContextData>({} as ApiContextData)

export const ApiProvider = ({ children }: ApiContextProps) => {
  const [videos, setVideos] = useState<ApiResponse>({} as ApiResponse)

  useEffect(() => {
    getVideos()
  }, [])

  const getVideos = async (page: number = 0) => {
    await api
      .get<ApiResponse>(`/videos?page=${page}`)
      .then(resp => setVideos(resp.data))
      .catch((error: any) => {
        console.log(error)
      })
  }

  return (
    <ApiContext.Provider
      value={{
        videos,
        getVideos,
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}
