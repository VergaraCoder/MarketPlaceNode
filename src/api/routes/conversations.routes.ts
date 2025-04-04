import { Router } from 'express';
import { ConversationController } from '../controllers/conversations.controller.ts';

const router: Router = Router();

router.post('/', ConversationController.createConversation);
router.get('/', ConversationController.getAllConversations);
router.get('/:idUser/:idSeller', ConversationController.getOneConversations);

export default router;
