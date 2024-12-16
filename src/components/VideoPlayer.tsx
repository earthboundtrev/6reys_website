import React from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
}

export default function VideoPlayer({ videoUrl, title }: VideoPlayerProps) {
  // Function to check if URL is a YouTube URL and get embed URL
  const getYouTubeEmbedUrl = (url: string): string | null => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;
    if (!youtubeRegex.test(url)) return null;

    // Handle youtu.be URLs
    if (url.includes('youtu.be')) {
      const videoId = url.split('youtu.be/')[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // Handle youtube.com URLs
    const videoId = url.split('v=')[1]?.split('&')[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  // Function to check if URL is a TikTok URL and get embed URL
  const getTikTokEmbedUrl = (url: string): string | null => {
    const tiktokRegex = /^(https?:\/\/)?(www\.)?(tiktok\.com)\/.+/;
    if (!tiktokRegex.test(url)) return null;

    // Convert regular TikTok URL to embed URL
    const cleanUrl = url.split('?')[0]; // Remove query parameters
    return `https://www.tiktok.com/embed/${cleanUrl.split('/').pop()}`;
  };

  const youtubeEmbed = getYouTubeEmbedUrl(videoUrl);
  const tiktokEmbed = getTikTokEmbedUrl(videoUrl);

  if (youtubeEmbed) {
    return (
      <div className="relative w-full aspect-video">
        <iframe
          className="w-full h-full rounded-lg"
          src={youtubeEmbed}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  if (tiktokEmbed) {
    return (
      <div className="relative w-full" style={{ aspectRatio: '325/575' }}> {/* TikTok's typical aspect ratio */}
        <iframe
          className="w-full h-full rounded-lg"
          src={tiktokEmbed}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  // Default video player for other video types
  return (
    <div className="relative w-full aspect-video">
      <video
        className="w-full h-full rounded-lg"
        controls
        preload="metadata"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}