import { MessageService } from '../../application/services/message.service.ts';
import { ConversationService } from '../../application/services/conversation.service.ts';
import { Server, Socket } from 'socket.io';
import { container } from 'tsyringe';
import { Message } from 'domain/models/messages.model.ts';
import { Result } from '../../utils/resultError/type.result.ts';
import { UserService } from '../../application/services/user.service.ts';
import { ProductService } from '../../application/services/product.service.ts';
import { Product } from 'domain/models/product.model.ts';

let users: any = {};
let messageQueue: { receiver: string; message: string }[] = [];
let lastMessageQueue;

export function ChatSocket(io: Server, socket: Socket) {
  socket.on('register', userId => {
    users[userId] = socket.id;
    messageQueue = messageQueue.filter(({ receiver, message }) => {
      if (receiver === userId) {
        io.to(socket.id).emit('privateMessage2', message);
        return false;
      }
      return true;
    });
  });

  socket.on('privateMessage', async (data: any) => {
    const {
      reciever,
      message,
      sendTo,
      idConversation,
      idUserSender,
      recieverChat,
    } = data;
    const { type, newMessage } = message;
    const messageService: MessageService = container.resolve(MessageService);

    const dataUrlOrBoolean: boolean | string =
      await messageService.insertMessage(
        idConversation,
        idUserSender,
        newMessage,
        type,
      );

    const messageResponse =
      typeof dataUrlOrBoolean == 'string' ? dataUrlOrBoolean : newMessage;

    console.log('RESPONSE IN');

    console.log(dataUrlOrBoolean);
    console.log(typeof dataUrlOrBoolean == 'string');

    if (users[recieverChat]) {
      io.to(users[recieverChat]).emit('privateMessage2', {
        chatId1: recieverChat,
        chatId2: sendTo,
        issuingUserId: parseInt(idUserSender),
        reciever: parseInt(idUserSender),
        message: messageResponse,
        type,
        sender: sendTo,
        idConversation: idConversation,
      });
    } else {
      messageQueue.push({ receiver: recieverChat, message: messageResponse });
    }
    io.to(users[sendTo]).emit('privateMessage2', {
      chatId1: recieverChat,
      chatId2: sendTo,
      issuingUserId: parseInt(idUserSender),
      reciever: reciever,
      message: messageResponse,
      type,
      sender: sendTo,
      idConversation: idConversation,
    });
  });

  socket.on('panelJoin', (roomPanelName: string, cb: Function) => {
    socket.join(roomPanelName);

    io.to(roomPanelName).emit('panel', { message: 'porque no solo es eso ' });
    cb('You unit correctly to the room');
  });

  socket.on('panel2', async (roomNamePanel: string, dataMessage: any) => {
    if (dataMessage.exist) {
      const {message}=dataMessage;
      const {newMessage,typeMessage}=message;
      dataMessage.message.type=='img' ? 
      delete dataMessage.message.newMessage : null;
      
      io.to(roomNamePanel).emit('panel2', {
        ...dataMessage,
        issuingUserId: dataMessage.reciever,
      });
    } else if (!dataMessage.exist && !dataMessage.private) {
      const conversationServices: ConversationService =
        container.resolve(ConversationService);

      const messageService: MessageService = container.resolve(MessageService);

      const { data, error } =
        await conversationServices.getAllConversationsById(dataMessage.idUser);

      const isEmpty: any = error ? false : data; // this mustbe a array of objects
      if (isEmpty) {
        const { data }: Result<Message[] | any> =
          await messageService.getLastMessageByIdConversations(
            isEmpty,
            dataMessage.idUser,
          );
        io.to(roomNamePanel).emit('panel2', [...data]);
      } else {
        io.to(roomNamePanel).emit('panel2', [{}]);
      }
    } else {
      io.to(roomNamePanel).emit('panel2', dataMessage);
    }
  });

  socket.on(
    'photoUser',
    async (chatIdUserReciever: string, chatIdReturnData: string) => {
      const userService: UserService = container.resolve(UserService);

      const data = await userService.getUserByChatId(chatIdUserReciever);

      io.to(users[chatIdReturnData]).emit('photoUserFront', data);
    },
  );

  socket.on('allProducts', async (idUser: number, chatId: string) => {
    const productService: ProductService = container.resolve(ProductService);
    const products: Product[] =
      await productService.getAllProductsByIdUser(idUser);
    io.to(users[chatId]).emit('productsById', products);
  });
}
