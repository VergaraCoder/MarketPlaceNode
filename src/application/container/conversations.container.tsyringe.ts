import { container } from "tsyringe";
import { ConversationService } from "../services/conversation.service";



container.registerSingleton<ConversationService>(ConversationService);