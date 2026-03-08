import mongoose from 'mongoose';

const songSchema = new mongoose.Schema({
  title:    { type: String, required: true },
  artist:   { type: String, required: true },
  album:    { type: mongoose.Schema.Types.ObjectId, ref: 'Album' },
  imageUrl: { type: String, required: true },
  audioUrl: { type: String, required: true },
  duration: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.model('Song', songSchema);