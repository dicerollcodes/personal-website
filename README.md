# Justin Bustamante Personal Website

My personal website built with Next.js and Tailwind CSS.

## Setup Instructions

### Prerequisites
- Node.js 14+ and npm

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
# Spotify (if you're using Spotify integration)
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REFRESH_TOKEN=your_spotify_refresh_token
```

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.


### Deployment

This site is ready for deployment on Vercel or any other Next.js-compatible hosting platform. 
Be sure to set your environment variables in your hosting provider's dashboard.
