import JWT from 'jsonwebtoken'
import dotenv from 'dotenv'
import { ReturnTokens } from '../../utils/auth/response/creationTokens.ts'
import { ManageError } from '../errors/error.custom.ts'
import { CreateAuthDto } from '../dto/auth/createAuth.dto.ts'
import { PayloadCompleteToken } from 'utils/auth/payloadToke.ts'

dotenv.config()

export class AuthService {
  create(dataUser: CreateAuthDto): ReturnTokens {
    const secret: string | any = process.env.JWT_SECRET
    return {
      access_token: JWT.sign(dataUser, secret, { expiresIn: '1d' }),
      refresh_token: JWT.sign(dataUser, secret, { expiresIn: '5d' }),
    }
  }

  renovateAccessToken(refresh_token: string): any {
    try {
      const secret: string = process.env.JWT_SECRET as string
      const payloadToken: PayloadCompleteToken = JWT.verify(
        refresh_token,
        secret,
      ) as PayloadCompleteToken

      delete payloadToken.iat
      delete payloadToken.exp

      return JWT.sign(payloadToken, secret, { expiresIn: '20m' })
    } catch (err: any) {
      if (
        err instanceof JWT.JsonWebTokenError ||
        err instanceof JWT.NotBeforeError ||
        err instanceof JWT.TokenExpiredError ||
        err.message == 'jwt expired'
      ) {
        throw new ManageError({
          type: 'UNAUTHORIZED',
          message: 'THE TOKEN IS NOT VALID',
        })
      }
      throw ManageError.signedError(err.message)
    }
  }
}
