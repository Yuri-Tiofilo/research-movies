export type ResultsAPIMovies = {
  adult?: boolean
  backdrop_path?: string
  id?: number
  original_title?: string
  overview?: string
  popularity?: number
  poster_path?: string
  release_date?: string
  title?: string
  video?: false
  vote_average?: number
  vote_count?: number
}

export type DataAPIMovies = {
  page: number
  total_pages: number
  total_results: number

  results: ResultsAPIMovies[]
}
