type User = {
  id: number
  uid: string
  display_name: string
  email: string
  photo_url: string
  introduction: string
  created_at: string
  updated_at: string
  opinion?: string
  finished_at?: string
  is_spoiler?: boolean
  watched_animes: AnimeShortInfo[]
  watching_animes: AnimeShortInfo[]
  will_watch_animes: AnimeShortInfo[]
  followings: UserShortInfo[]
  followers: UserShortInfo[]
  active_notifications: Activity[]
  passive_notifications: Activity[]
}

type UserShortInfo = {
  id: number
  email: string
  created_at: string
  updated_at: string
  uid: string
  display_name: string
  photo_url: string
}