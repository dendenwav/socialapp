import express from 'express';

import { updateUser, deleteUser, getUser, getUsers, followUser, unfollowUser } from '../controllers/users.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

router.get("/:id", getUser);
router.get("/", getUsers);
router.put("/:id", auth, updateUser);
router.delete("/:id", auth, deleteUser);
router.put("/:id/follow", auth, followUser);
router.put("/:id/unfollow", auth, unfollowUser);

export default router;
