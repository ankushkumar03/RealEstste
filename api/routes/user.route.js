import express from 'express';
import {
  test,
  updateUser,
  deleteUser,
  getUserListings,
  getUser,
} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

// ✅ Test route (no auth needed)
router.get('/test', test);

// ✅ Authenticated routes
router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);

// ✅ More specific route first to avoid conflict
router.get('/listings/:id', verifyToken, getUserListings);

// ✅ Renamed from '/:id' to avoid conflict
router.get('/user/:id', verifyToken, getUser);

export default router;
