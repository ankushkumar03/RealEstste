import express from 'express'; // ✅ Required import
import { test, updateUser, deleteUser, getUserListings, getUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js'; // ✅ Middleware for auth

const router = express.Router();

router.get('/test', test);
router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);

// ✅ More specific route first
router.get('/listings/:id', verifyToken, getUserListings);

// ✅ Generic route after
router.get('/:id', verifyToken, getUser);

export default router;
