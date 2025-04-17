import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#121212',
            padding: '40px 60px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              maxWidth: '800px',
            }}
          >
            <h1
              style={{
                fontSize: '60px',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: 'white',
              }}
            >
              Justin Bustamante
            </h1>
            <p
              style={{
                fontSize: '30px',
                color: '#10b981', // green-500
                marginBottom: '10px',
              }}
            >
              Software Engineer
            </p>
            <p
              style={{
                fontSize: '22px',
                color: '#9ca3af', // gray-400
                marginTop: '20px',
              }}
            >
              Computer Science & Math • Web Development • Game Enthusiast
            </p>
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              right: '40px',
              fontSize: '22px',
              color: '#9ca3af',
            }}
          >
            justinbustamante.me
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e) {
    console.log(`${e}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
} 