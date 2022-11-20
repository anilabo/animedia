type Activity = {
  id: number
  operative_user: UserShortInfo
  passive_user: UserShortInfo
  action: string // あとでenumに変更する
  checked: boolean
  created_at: string
  updated_at: string
}