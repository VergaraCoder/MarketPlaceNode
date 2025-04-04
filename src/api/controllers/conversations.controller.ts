import { NextFunction, Request, Response } from 'express';
import { ConversationService } from '../../application/services/conversation.service.ts';
import { container } from 'tsyringe';
import { Result } from '../../utils/resultError/type.result.ts';
import { Conversation } from '../../domain/models/conversations.model.ts';

export class ConversationController {
  public static async createConversation(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any> {
    const ConversationsService: ConversationService =
      container.resolve(ConversationService);
    const dataResponse: Conversation =
      await ConversationsService.createConversation(req.body);
    res.json({ data: dataResponse });
  }

  public static async getAllConversations(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any> {
    const ConversationsService: ConversationService =
      container.resolve(ConversationService);
    const { data, error }: Result<Conversation[]> =
      await ConversationsService.getAllConversationsById(
        parseInt(req.params.idUser),
      );
    error ? next(error) : res.json({ data });
  }

  public static async getOneConversations(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any> {
    const ConversationsService: ConversationService =
      container.resolve(ConversationService);
    const { data, error }: Result<Conversation> =
      await ConversationsService.getOneConversationsById(
        parseInt(req.params.idUser),
        parseInt(req.params.idSeller)
      );
    error ? next(error) : res.json({ data });
  }
}