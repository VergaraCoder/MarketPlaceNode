import { Repository } from "typeorm";
import { dbConnection } from '../../config/db/db.config.ts';
import { Message } from "../models/messages.model.ts";



export const MessageRepository:Repository<Message>=dbConnection.getRepository('messages');