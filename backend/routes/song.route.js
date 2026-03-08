import express from 'express';
import multer from 'multer';
import { getAllSongs, uploadSong, deleteSong } from '../controllers/song.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.get('/', getAllSongs);
router.post('/',
  protect,
  upload.fields([
    { name: 'imageFile', maxCount: 1 },
    { name: 'audioFile', maxCount: 1 }
  ]),
  uploadSong
);
router.delete('/:id', protect, deleteSong);

export default router;