import { Router } from 'express';
import { MessageController } from '../controllers/message.controller.ts';

const router: Router = Router();

router.post('/', MessageController.insertMessage);

router.get('/:idConversation', MessageController.getAllMessageByIdConversations);


export default router;