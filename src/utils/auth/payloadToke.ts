export interface PayloadToken {
  role: string
  email: string
  name: string
  cart:number
}

export interface PayloadCompleteToken extends PayloadToken {
  iat?: number
  exp?: number
}
