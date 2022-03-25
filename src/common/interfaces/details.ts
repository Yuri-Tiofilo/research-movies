export type Genres = {
  id: number
  name: string
}

export type Results = {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: {
    id: number
    name: string
    poster_path: string
    backdrop_path: null | string
  }
  budget: number
  genres: Genres[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  // production_companies: (5) [{…}, {…}, {…}, {…}, {…}]
  // production_countries: (2) [{…}, {…}]
  release_date: string
  revenue: number
  runtime: number
  // spoken_languages: [{…}]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
