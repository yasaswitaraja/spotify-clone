import Album from '../models/Album.model.js';

export const getAllAlbums = async (req, res) => {
  try {
    const albums = await Album.find().populate('songs');
    res.json(albums);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAlbumById = async (req, res) => {
  try {
    const album = await Album.findById(req.params.id).populate('songs');
    if (!album) return res.status(404).json({ message: 'Album not found' });
    res.json(album);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};