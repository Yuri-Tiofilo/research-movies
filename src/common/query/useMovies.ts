import { useQuery } from 'react-query'

import { baseConfig } from 'common/constants'
import api from 'common/services/api'
import { DataAPIMovies } from 'common/interfaces/movies'

export async function loadMoviesQuery(page: string) {
  try {
    const { data } = await api.get(
      `/movie/upcoming?api_key=${baseConfig.apiKey}&language=pt-BR&page=${page}`
    )

    return data
  } catch (error) {
    alert('deu ruim')
  }
}

export async function searchInputMovies(value: string, page: string) {
  try {
    const { data } = await api.get(
      `/search/movie?api_key=${baseConfig.apiKey}&query=${value}&language=pt-BR&page=${page}`
    )

    return data
  } catch (error) {
    alert('Error ao realizar a busca')
  }
}

export function useMoviesQuery({ page = '1' }) {
  return useQuery<DataAPIMovies>('movies', () => loadMoviesQuery(page))
}
