const router = express.Router();

router.get('/test', test);
router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);

// ✅ Specific first
router.get('/listings/:id', verifyToken, getUserListings);

// ✅ Generic after
router.get('/:id', verifyToken, getUser);

export default router;
