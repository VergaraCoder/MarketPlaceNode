import { dbConnection } from '../../config/db/db.config.ts';
import { Conversation } from '../../domain/models/conversations.model.ts';
import { ConversationRepository } from '../../domain/repositories/conversation.repository.ts';
import { Result } from '../../utils/resultError/type.result.ts';
import { ManageError } from '../errors/error.custom.ts';

export class ConversationService {
  async createConversation(dataConversation: any): Promise<Conversation> {
    const dataCreate: Conversation | any =
      ConversationRepository.create(dataConversation);
    await ConversationRepository.save(dataCreate);
    console.log(dataCreate);
    
    return dataCreate;
  }

  async getAllConversationsById(
    idUser: number,
  ): Promise<Result<Conversation[]>> {
    const query: string = `
    SELECT * FROM conversations WHERE userId1=? OR userId2=? 
    `;
    const allConversation: Conversation[] = await dbConnection.query(query, [
      idUser,
      idUser,
    ]);
    if (allConversation.length == 0) {
      return {
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'THERE ARE NOT CONVERSATIONS',
        }),
        data: null,
      };
    }
    return {
      error: null,
      data: allConversation,
    };
  }

  async getOneConversationsById(
    idUser: number,
    idSeller: number,
  ): Promise<any> {
    const query: string = `
        SELECT * FROM conversations as conver
        WHERE conver.userId1= ? AND conver.userId2= ?
        `;
    const conversation: Conversation[] = await dbConnection.query(query, [
      idSeller,
      idUser,
    ]);
    
    if (conversation.length==0) {
       const dataCreated=await this.createConversation({userId1:idSeller,userId2:idUser,creationDate:new Date()});
       return {data:dataCreated};
    }
    return {
      error: null,
      data: conversation[0],
    };
  }
}
