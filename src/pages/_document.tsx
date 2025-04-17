import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const siteUrl = 'https://justinbustamante.me';
  
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta name="title" content="Justin Bustamante - Software Engineer" />
        <meta name="description" content="Personal website of Justin Bustamante, an aspiring software engineer focused on computer science and math." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="Justin Bustamante - Software Engineer" />
        <meta property="og:description" content="Personal website of Justin Bustamante, an aspiring software engineer focused on computer science and math." />
        <meta property="og:image" content={`${siteUrl}/api/og`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Justin Bustamante - Software Engineer" />
        
        {/* Fallback image if dynamic OG fails */}
        <meta property="og:image:url" content={`${siteUrl}/images/og-image.png`} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteUrl} />
        <meta property="twitter:title" content="Justin Bustamante - Software Engineer" />
        <meta property="twitter:description" content="Personal website of Justin Bustamante, an aspiring software engineer focused on computer science and math." />
        <meta property="twitter:image" content={`${siteUrl}/api/og`} />
        
        {/* LinkedIn specific */}
        <meta property="linkedin:card" content="summary_large_image" />
        <meta property="linkedin:image" content={`${siteUrl}/api/og`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 