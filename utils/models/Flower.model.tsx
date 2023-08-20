import { MetaPagination } from '~/utils/models'

export type Flower = {
  id: number
  name: string
  latin_name: string
  sightings: number
  profile_picture: string
  favorite: boolean
}

export type GetFlowersResponse = {
  flowers: Flower[]
  meta: MetaPagination
}
