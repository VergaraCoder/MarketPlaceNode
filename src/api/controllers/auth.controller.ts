import { NextFunction, Request, Response } from 'express';
import { AuthService } from '../../application/services/auth.service.ts';
import { container } from 'tsyringe';
import { ReturnTokens } from 'utils/auth/response/creationTokens.ts';

export class AuthController {
  public static async createAuth(req: Request, res: Response) {
    const authService: AuthService = container.resolve(AuthService);
    const tokens: ReturnTokens = authService.create(req.body);
    res.json({ message: 'meloo', ...tokens,chatId:req.body.chatId ,id:req.body.id});
  }

  public static async renovateAcessToken(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const authService: AuthService = container.resolve(AuthService);
    const refresh_token: string = req.headers['refresh_token'] as string;
    const access_token: string = authService.renovateAccessToken(refresh_token);
    res.json({
      access_token: access_token,
    });
  }
}
