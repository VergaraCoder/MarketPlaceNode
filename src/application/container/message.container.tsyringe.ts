import { container } from "tsyringe";
import { MessageService } from "../services/message.service";

container.registerSingleton<MessageService>(MessageService);