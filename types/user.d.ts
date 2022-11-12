type User = {
  id: number
  uid: string
  display_name: string
  email: string
  photo_url: string
  created_at: string
  updated_at: string
  opinion?: string
  finished_at?: string
  watched_animes: AnimeShortInfo[]
  watching_animes: AnimeShortInfo[]
  will_watch_animes: AnimeShortInfo[]
}