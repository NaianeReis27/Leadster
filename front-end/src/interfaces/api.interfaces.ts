export interface Data {
  id: string
  url: string
  title: string
  tag: string
  createdAt: Date
}

interface Pagination {
  path: string
  page: number
  lastPage: number
  prev_page_url: number
  next_page_url: number
}

export interface ApiResponse {
  data: Data[]
  pagination: Pagination
}
