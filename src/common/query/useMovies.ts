import { useQuery } from 'react-query'

import { baseConfig } from 'common/constants'
import api from 'common/services/api'

async function loadMovies(page: string) {
  try {
    const response = await api.get(
      `/movie/upcoming?api_key=${baseConfig.apiKey}&language=pt-BR&page=${page}`
    )

    return response
  } catch (error) {
    alert('deu ruim')
  }
}

export function useMovies({ page = '1' }) {
  return useQuery('movies', () => loadMovies(page))
}
