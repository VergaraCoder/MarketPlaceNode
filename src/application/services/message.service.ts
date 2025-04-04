import { dbConnection } from '../../config/db/db.config.ts';
import { Message } from '../../domain/models/messages.model.ts';
import { MessageRepository } from '../../domain/repositories/message.repository.ts';
import { Result } from '../../utils/resultError/type.result.ts';
import { ManageError } from '../errors/error.custom.ts';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();

export class MessageService {
  async createConversation(dataMessage: any): Promise<Message> {
    const dataCreate: Message | any = MessageRepository.create(dataMessage);
    await MessageRepository.save(dataCreate);
    return dataCreate;
  }

  async insertMessage(
    idConversation: number,
    idSender: string,
    message: string,
    type: string,
  ): Promise<boolean | string> {
    const query: string = `
      INSERT INTO messages (idConversation,issuingUserId,message,sendDate,type) 
      VALUES (?,?,?,?,?)
      `;
    const date: Date = new Date();
    if (type == 'img') {
      console.log('ENTER TO CLOUDINARY');

      cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY_CLOUDINARY,
        api_secret: process.env.API_SECRET_CLOUDINARY,
      });
      const upload = await cloudinary.uploader.upload(message);
      console.log('THE RESULT CLOUDINARY IS ');
      console.log(upload);
      const result = await dbConnection.query(query, [
        idConversation,
        idSender,
        upload.secure_url,
        date,
        type,
      ]);
      return upload.secure_url;
    } else {
      const { insertId }: any = await dbConnection.query(query, [
        idConversation,
        idSender,
        message,
        date,
        type,
      ]);
      return true;
    }
  }

  async getAllMessageByIdConversations(
    idConversation: number,
  ): Promise<Result<Message[]>> {
    const query: string = `
            SELECT * FROM messages WHERE idConversation=?
        `;
    const allMessages: Message[] = await dbConnection.query(query, [
      idConversation,
    ]);
    if (allMessages.length == 0) {
      return {
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'THERE ARE NOT MESSAGES',
        }),
        data: null,
      };
    }
    return {
      error: null,
      data: allMessages,
    };
  }

  async getAllMessageByIdConversationsPagination(
    idConversation: number,
    page: number,
    limit: number,
  ): Promise<Result<Message[]>> {
    const query1: string = `
     SELECT 
        mess.*
    FROM conversations AS conver 
    LEFT JOIN messages AS mess ON conver.id = mess.idConversation
    WHERE conver.id=?`;

    const resultQuery = await dbConnection.query(query1, [idConversation]);

    if (!resultQuery || resultQuery.length == 0) {
      return {
        data: null,
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'THERE ARE NOT MESSAGES',
        }),
      };
    }

    const offSet: number = (page - 1) * limit;

    const query: string = `
     SELECT 
        mess.message,
        mess.type,
        usr.chatId AS sender,
        conver.id as idConversation
    FROM conversations AS conver 
    LEFT JOIN messages AS mess ON conver.id = mess.idConversation
    LEFT JOIN users AS usr ON usr.id=mess.issuingUserId
    WHERE conver.id=?
    ORDER BY mess.sendDate DESC LIMIT ? OFFSET ?
    `;
    const allMessages: Message[] = await dbConnection.query(query, [
      idConversation,
      limit,
      offSet,
    ]);
    if (allMessages.length == 0) {
      return {
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'THERE ARE NOT MESSAGES',
        }),
        data: null,
      };
    }
    return {
      error: null,
      data: allMessages.reverse(),
    };
  }

  async getLastMessageByIdConversations(
    conversations: any[],
    idUser: number,
  ): Promise<Result<Message[]>> {
    let messages = [];
    for (let x: number = 0; x < conversations.length; x++) {
      const idConversat: (typeof conversations)[0] = conversations[x];
      const query: string = `
            SELECT 
                mess.*,
                usr.chatId AS recieverChatId, 
                usr.id AS reciever
            FROM messages AS mess
            JOIN conversations AS conver ON conver.id = mess.idConversation
            JOIN users AS usr ON usr.id = 
                CASE 
                    WHEN conver.userId1 = ? 
                    THEN conver.userId2
                    ELSE conver.userId1
                END
            WHERE mess.idConversation = ? 
            ORDER BY mess.id DESC 
            LIMIT 1;
            `;
      const message: Message[] = await dbConnection.query(query, [
        idUser,
        idConversat.id,
      ]);
      messages.push(...message);
    }
    console.log('the messages is ');
    console.log(messages);

    if (messages.length == 0) {
      return {
        error: new ManageError({
          type: 'NOT_FOUND',
          message: 'THERE ARE NOT MESSAGES',
        }),
        data: null,
      };
    }
    return {
      error: null,
      data: messages,
    };
  }
}
