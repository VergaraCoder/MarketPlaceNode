export interface PayloadToken {
  role: string
  email: string
  name: string
}

export interface PayloadCompleteToken extends PayloadToken {
  iat?: number
  exp?: number
}
