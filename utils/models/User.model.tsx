export type User = {
  id?: number
  first_name: string
  last_name: string
}

export type GetMeResponse = {
  user: User
}
