type Anime = {
  id: number
  public_uid: string
  title: string
  title_en: string
  title_short1?: string
  title_short2?: string
  title_short3?: string
  public_url: string
  twitter_account: string
  twitter_hash_tag: string
  sequel: number
  thumbnail_url: string
  year: number
  season: string
  companies: Company[]
  series: AnimeShortInfo[]
  watched_users: User[]
  watching_users: User[]
  will_watch_users: User[]
}

type AnimeShortInfo = {
  id: number
  public_uid: string
  title: string
  title_short1: string
  title_short2: string
  title_short3: string
  title_en: string
  public_url: string
  twitter_hash_tag: string
  twitter_account: string
  sequel: number
  thumbnail_url: string
  year: number
  season: string
  opinion?: string
  finished_at?: string
}
