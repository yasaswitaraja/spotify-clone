import Song from '../models/Song.model.js';
import cloudinary from '../config/cloudinary.js';

export const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find().sort({ createdAt: -1 });
    res.json(songs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const uploadSong = async (req, res) => {
  try {
    const { title, artist, duration } = req.body;
    const { imageFile, audioFile } = req.files;

    if (!imageFile || !audioFile)
      return res.status(400).json({ message: 'Both image and audio files are required' });

    const imgUpload   = await cloudinary.uploader.upload(imageFile[0].path, { resource_type: 'image' });
    const audioUpload = await cloudinary.uploader.upload(audioFile[0].path, { resource_type: 'video' });

    const song = await Song.create({
      title, artist, duration,
      imageUrl: imgUpload.secure_url,
      audioUrl: audioUpload.secure_url,
    });

    res.status(201).json(song);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteSong = async (req, res) => {
  try {
    await Song.findByIdAndDelete(req.params.id);
    res.json({ message: 'Song deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};