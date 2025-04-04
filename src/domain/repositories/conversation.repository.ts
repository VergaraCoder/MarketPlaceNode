import { Repository } from "typeorm";
import {Conversation} from '../models/conversations.model.ts';
import { dbConnection } from '../../config/db/db.config.ts';



export const ConversationRepository:Repository<Conversation>=dbConnection.getRepository('conversations');