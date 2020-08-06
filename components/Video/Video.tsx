import React from 'react';

interface Props {
  src?: string;
  vimeoId?: string;
}

export const Video: React.FC<Props> = ({ src, vimeoId }) => {
  const videoSrc = src
    ? src
    : vimeoId
    ? `https://player.vimeo.com/video/${vimeoId}`
    : '';

  return (
    <div className="video">
      <iframe src={videoSrc} frameBorder="0" allowFullScreen />

      <style jsx>{`
        .video {
          overflow: hidden;
          padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
          position: relative;
          width: 100%;
        }

        iframe {
          bottom: 0;
          height: 100%;
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
          width: 100%;
        }
      `}</style>
    </div>
  );
};
