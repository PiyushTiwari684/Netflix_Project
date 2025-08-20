# Netflix Clone

## 📌 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Frontend Implementation](#frontend-implementation)
- [API Endpoints](#api-endpoints)
- [Performance & Testing](#performance--testing)
- [Future Improvements](#future-improvements)

## 🎯 Overview
A full-stack Netflix clone application built with React and Node.js that replicates core Netflix features including authentication, movie browsing, search, and trailer playback.

## 🚀 Features
- User authentication (signup/login/logout)
- Browse movies by categories:
  - Now Playing
  - Popular Movies
  - Top Rated Movies
  - Upcoming Movies
- Real-time movie search
- Movie trailer playback
- Responsive design
- Protected routes

## 🛠️ Tech Stack

### Frontend
- React 19
- Redux Toolkit
- React Router v7
- Axios
- Tailwind CSS
- Material UI
- React Hot Toast

### Backend
- Node.js
- Express
- MongoDB (Mongoose)
- JWT
- bcrypt
- Cookie Parser
- CORS

## 📂 Project Structure

```
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── customHooks/
│   │   ├── redux/
│   │   └── utils/
│   └── package.json
│
└── Backend/
    ├── src/
    │   ├── config/
    │   ├── controllers/
    │   ├── middleware/
    │   ├── models/
    │   ├── routes/
    │   └── utils/
    └── package.json
```

## 🔧 Setup & Installation

1. Clone the repository
```bash
git clone <repository-url>
```

2. Install Dependencies
```bash
# Backend
cd Backend
npm install

# Frontend
cd Frontend
npm install
```

3. Environment Setup
```env
PORT=8000
MONGODB_URL=your_mongodb_connection_string
```

4. Start Servers
```bash
# Backend
npm start

# Frontend
npm run dev
```

## 💻 Frontend Implementation

### Core Components

#### Header Component
- Dynamic navbar with authentication state
- Scroll-based transparency
- Debounced search functionality
- User profile dropdown

#### Browse Page
- Featured content hero banner
- Horizontal sliding movie rows
- Lazy loading implementation
- Custom carousel with animations

#### Movie Card
- Interactive hover effects
- Dynamic backdrop loading
- Instant trailer access
- Wishlist integration

### State Management
```javascript
{
  user: {
    currentUser: Object,
    loading: Boolean,
    error: String
  },
  movies: {
    trending: Array,
    topRated: Array,
    upcoming: Array,
    nowPlaying: Array
  },
  search: {
    results: Array,
    query: String,
    loading: Boolean
  }
}
```

### Custom Hooks
1. `useAuth` - Authentication management
2. `useMovieFetch` - Data fetching with caching
3. `useDebounce` - Search optimization

### Responsive Design
```css
.container {
  width: 100%;
  @media (min-width: 640px) { max-width: 640px; }
  @media (min-width: 768px) { max-width: 768px; }
  @media (min-width: 1024px) { max-width: 1024px; }
  @media (min-width: 1280px) { max-width: 1280px; }
}
```

## 🔑 API Endpoints

### Authentication
- `POST /user/v1/register` - User registration
- `POST /user/v1/login` - User login
- `GET /user/v1/logout` - User logout

### Movies
- `GET /api/movies/trending` - Get trending movies
- `GET /api/movies/top-rated` - Get top rated movies
- `GET /api/movies/search?q={query}` - Search movies

## 📊 Performance & Testing

### Performance Metrics
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms

### Testing Strategy
- Unit Tests: Components, Redux, Hooks
- Integration Tests: User flows, API integration
- E2E Tests: Critical paths, Cross-browser compatibility

### Optimizations
- Image lazy loading
- Component memoization
- Code splitting
- Virtual scrolling
- Progressive image loading
- API response caching

## 💡 Future Improvements
- Watchlist functionality
- User profiles
- Movie recommendations
- Enhanced error handling
- Unit test coverage
- Performance optimizations
- Social authentication
- Download functionality

## 📄 License
This project is open source and available under the MIT License.

---
Built with ❤️ using React & Node.js

## 📞 Contact Information

### Developer Details
- **Name:** Piyush Tiwari
- **Email:** tiwaripiyush89555@gmail.com
- **LinkedIn:** [Connect with me](www.linkedin.com/in/piyushtiwari0101)
