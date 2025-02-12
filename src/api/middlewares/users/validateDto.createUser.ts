import { NextFunction, Request, Response } from 'express'
import { CreateUserDto } from '../../../application/dto/user/createUser.dto.ts'
import { plainToClass } from 'class-transformer'
import { ReponseHttp } from '../../../application/errors/enum.responseError.ts'

export const ValidateDtoCreateUser = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const user: CreateUserDto = plainToClass(CreateUserDto, req.body)

  if (typeof user.idRole !== 'number') {
    ReponseHttp.BAD_REQUEST(res, 'THE idRole MUST BE NUMBER', req.method)
    return
  }

  if (typeof user.name !== 'string') {
    ReponseHttp.BAD_REQUEST(res, 'THE NAME MUST BE STRING', req.method)
    return
  }

  if (typeof user.email !== 'string') {
    ReponseHttp.BAD_REQUEST(res, 'THE EMAIL MUST BE STRING', req.method)
    return
  }

  if (typeof user.password !== 'string') {
    ReponseHttp.BAD_REQUEST(res, 'THE PASSWORD MUST BE STRING', req.method)
    return
  }

  if (user.name === undefined || user.name === null) {
    ReponseHttp.BAD_REQUEST(res, 'THE NAME IS REQUIRED', req.method)
    return
  }

  if (user.idRole === undefined || user.idRole === null) {
    ReponseHttp.BAD_REQUEST(res, 'THE idRole IS REQUIRED', req.method)
    return
  }

  if (user.email === undefined || user.email === null) {
    ReponseHttp.BAD_REQUEST(res, 'THE EMAIL IS REQUIRED', req.method)
    return
  }

  if (user.password === undefined || user.password === null) {
    ReponseHttp.BAD_REQUEST(res, 'THE PASSWORD IS REQUIRED', req.method)
    return
  }

  if (user.name.length < 3) {
    ReponseHttp.BAD_REQUEST(
      res,
      'THE NAME MUST HAVE MORE THAN 3 CHARACTERS',
      req.method,
    )
    return
  }

  if (user.email.length < 3) {
    ReponseHttp.BAD_REQUEST(
      res,
      'THE NAME MUST HAVE MORE THAN 3 CHARACTERS',
      req.method,
    )
    return
  }

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(user.email)) {
    ReponseHttp.BAD_REQUEST(res, 'THE EMAIL IS NOT VALID', req.method)
    return
  }

  if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/.test(user.password)) {
    ReponseHttp.BAD_REQUEST(res, 'THE PASSWORD IS NOT VALID', req.method)
    return
  }
  next()
}
