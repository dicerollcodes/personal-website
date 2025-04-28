# Justin Bustamante Personal Website

My personal website built with Next.js, Tailwind CSS, and MongoDB.

## Setup Instructions

### Prerequisites
- Node.js 14+ and npm
- MongoDB Atlas account (for database)

### Installation

1. Clone this repository:
```bash
git clone https://github.com/dicerollcodes/personal-website.git
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. Environment Variables
Create a `.env.local` file in the root of the project with the following variables:
```
# MongoDB
MONGODB_URI=your_mongodb_connection_string_here
MONGODB_DB=personal_website

# Spotify (if you're using Spotify integration)
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REFRESH_TOKEN=your_spotify_refresh_token
```

For MongoDB, you'll need to:
1. Create a MongoDB Atlas account (free tier is available)
2. Create a new cluster
3. Get your connection string from the Atlas dashboard
4. Replace `your_mongodb_connection_string_here` with your actual connection string

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Admin Interface

To update your "Currently Working On" section, visit:
```
http://localhost:3000/admin/current-project
```

This page allows you to edit:
- Project title
- Description
- GitHub link
- Progress percentage
- Technology stack

### Deployment

This site is ready for deployment on Vercel or any other Next.js-compatible hosting platform. 
Be sure to set your environment variables in your hosting provider's dashboard.
