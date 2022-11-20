// 本当は Notification にしたいが、TSのライブラリと被ったので、使えなかった
type Activity = {
  id: number
  operative_user: UserShortInfo
  passive_user: UserShortInfo
  anime: Anime
  watch_log?: WatchLog
  action: 'follow' | 'followed' | 'will_watch' | 'watching' | 'opinion'
  checked: boolean
  created_at: string
  updated_at: string
}

type WatchLog = {
  id: string
  opinion: string
  is_spoiler: boolean
}
