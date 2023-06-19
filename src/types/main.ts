export interface Task {
  id: number
  text?: string
  done?: boolean
}

export interface Modal {
  display: boolean
  props?: object
}