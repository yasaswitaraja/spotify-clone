🎵 Spotify Clone - Full Stack MERN Application

A fully functional, responsive music streaming platform built using the MERN stack (MongoDB, Express.js, React, Node.js).
This project includes a custom music player, secure authentication system, and cloud-based media storage.

🚀 **Live Demo**
🌐 **Frontend:** https://spotify-clone-rho-nine-44.vercel.app
⚙️** Backend API**: https://spotify-clone-b3pm.onrender.com
✨ Features
🎧 **Music Player**
Play, Pause, Next, Previous
Seek functionality with real-time progress bar
Volume control
🔐 Authentication
Secure Signup & Login
Password hashing using bcryptjs
Token-based authentication using JWT
☁️ **Cloud Storage**
Audio files & images stored in Cloudinary
Fast and optimized media delivery
🎨 UI/UX
Responsive dark-themed UI
Inspired by Spotify design
Built using React + Tailwind CSS
📊** Database**
MongoDB Atlas for storing:
Users
Songs
Albums
🔒 Protected Routes
Only authenticated users can:
Access player
View library
🛠️ Tech Stack
Frontend
React.js (Vite)
React Router DOM
Axios
Context API
Tailwind CSS / Styled Components
Backend
Node.js
Express.js
MongoDB Atlas
Cloudinary
Multer
JSON Web Tokens (JWT)
**📂 Project Structure**
spotify-clone/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── context/
    │   ├── pages/
    │   └── App.jsx


**⚙️ Installation & Setup**
1️⃣ Clone Repository
git clone https://github.com/YOUR_USERNAME/spotify-clone.git
cd spotify-clone
2️⃣ Backend Setup
cd backend
npm install

Create a .env file:

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

Run backend:

npm run dev
3️⃣ Frontend Setup
cd frontend
npm install
npm run dev
📝 Content Note
The app is fully functional.
To add songs:
Use admin APIs OR
Directly upload .mp3 files + images via backend/database


📌 Future Improvements
Playlist creation
Like/Favorite songs
Search optimization
Admin dashboard
Real-time streaming
🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

📜 License

This project is licensed under the MIT License.

⭐ Support

If you like this project, give it a ⭐ on GitHub!
