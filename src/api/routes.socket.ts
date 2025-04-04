import { Server, Socket } from 'socket.io';
import { EventName, objectSocket } from '../app.ts';
import { ChatSocket } from './gateway/chat.socket.ts';

export function SocketsRoutes(io: Server) {
  io.on('connection', (socket: Socket) => {
    ChatSocket(io, socket);
  });
};
