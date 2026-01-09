
export interface Post {
  id: number
  author: string
  tripcode?: string
  timestamp: string
  content: string
  number: number
}

export interface Thread {
  id: string
  title: string
  author: string
  boardId: string
  lastActive: string
  posts: Post[]
}

export interface Board {
  id: string
  name: string
  description: string
}
