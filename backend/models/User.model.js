import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username:   { type: String, required: true, unique: true },
  email:      { type: String, required: true, unique: true },
  password:   { type: String, required: true },
  profilePic: { type: String, default: '' },
  likedSongs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],
  playlists:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Playlist' }],
}, { timestamps: true });

export default mongoose.model('User', userSchema);