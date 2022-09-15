import express from 'express';

import { getComments, createComment, updateComment, deleteComment, likeComment } from '../controllers/comments.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

router.get("/:id", getComments);
router.post("/", auth, createComment);
router.put("/:id", auth, updateComment);
router.delete("/:id", auth, deleteComment);
router.put("/:id/like", auth, likeComment);

export default router;