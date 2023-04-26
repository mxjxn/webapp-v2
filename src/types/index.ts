export interface State<T> {
  loading: boolean
  data?: T
  error?: string
}

export type WalletAddress = string
