import { NextApiRequest, NextApiResponse } from 'next';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

async function getAccessToken() {
  try {
    console.log('Attempting to get access token with:', {
      clientId: client_id?.slice(0, 5) + '...',
      clientSecret: client_secret?.slice(0, 5) + '...',
      refreshToken: refresh_token?.slice(0, 5) + '...',
      basic: basic.slice(0, 10) + '...'
    });

    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refresh_token!,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Spotify token response:', response.status, error);
      throw new Error(`Failed to get access token: ${response.status} ${error}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
}

async function getNowPlaying() {
  try {
    const { access_token } = await getAccessToken();

    // First try currently playing
    const nowPlaying = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (nowPlaying.status === 200) {
      const song = await nowPlaying.json();
      if (!song.item) {
        throw new Error('No song playing');
      }
      return {
        isPlaying: true,
        title: song.item.name,
        artist: song.item.artists.map((_artist: any) => _artist.name).join(', '),
        albumImageUrl: song.item.album.images[0].url,
        songUrl: song.item.external_urls.spotify,
      };
    }

    // If nothing is playing, get recently played
    const recentlyPlayed = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (recentlyPlayed.status === 200) {
      const { items } = await recentlyPlayed.json();
      if (!items?.length) {
        throw new Error('No recent songs');
      }
      const song = items[0].track;
      return {
        isPlaying: false,
        title: song.name,
        artist: song.artists.map((_artist: any) => _artist.name).join(', '),
        albumImageUrl: song.album.images[0].url,
        songUrl: song.external_urls.spotify,
      };
    }

    throw new Error('Failed to get song data');
  } catch (error) {
    console.error('Error in getNowPlaying:', error);
    throw error;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await getNowPlaying();
    res.status(200).json(response);
  } catch (error) {
    console.error('Spotify API error:', error);
    res.status(500).json({ error: 'Failed to fetch Spotify data' });
  }
} 