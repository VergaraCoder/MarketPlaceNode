import { NextFunction, Request, Response } from 'express';
import { ConversationService } from '../../application/services/conversation.service.ts';
import { container } from 'tsyringe';
import { Result } from '../../utils/resultError/type.result.ts';
import { Conversation } from '../../domain/models/conversations.model.ts';
import { MessageService } from '../../application/services/message.service.ts';
import { Message } from '../../domain/models/messages.model.ts';

export class MessageController {
  public static async insertMessage(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any> {
    const MessagService: MessageService = container.resolve(MessageService);
    const dataResponse: Message = await MessagService.createConversation(req.body);
    res.json({ data: dataResponse });
  }

  public static async insertMessage2(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any> {
    const MessagService: MessageService = container.resolve(MessageService);
    const dataResponse: boolean | string = await MessagService.insertMessage(
      req.body.idConversation,
      req.body.idSender,
      req.body.message,
      req.body.type,
    );
    res.json({ data: dataResponse });
  }

  public static async getAllMessageByIdConversations(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any> {
    console.log('ENTER ENDPOINT');
    
    const MessagService: MessageService = container.resolve(MessageService);
    if (!req.query.page) {
      const { data, error }: Result<Message[]> =
        await MessagService.getAllMessageByIdConversations(
          parseInt(req.params.idConversation),
        );
      error ? next(error) : res.json({ data });
    } else {
        const page:any=req.query.page;
        const limit:any=req.query.limit;
  
      const { data, error }: Result<Message[]> =
        await MessagService.getAllMessageByIdConversationsPagination(
          parseInt(req.params.idConversation),
          parseInt(page),
          parseInt(limit),
        );
      error ? next(error) : res.json({ data });
    }
  }
}
