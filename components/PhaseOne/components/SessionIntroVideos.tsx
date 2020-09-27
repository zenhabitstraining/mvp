import React, { useState } from 'react';
import { Button, Collapse } from '@blueprintjs/core';

import { Video } from '@/components/Video';

interface Props {
  videoId: string;
}

const IS_VIDEO_1_HIDDEN = 'is-intro-video-1-hidden';
const IS_VIDEO_2_HIDDEN = 'is-intro-video-2-hidden';

export const SessionIntroVideos = ({ videoId }: Props) => {
  const [isVideo1Hidden, setVideo1Hidden] = useState(
    localStorage.getItem(IS_VIDEO_1_HIDDEN) === 'true',
  );
  const [isVideo2Hidden, setVideo2IsHidden] = useState(
    localStorage.getItem(IS_VIDEO_2_HIDDEN) === 'true',
  );

  return (
    <>
      <h1>Welcome to Your Training!</h1>
      <h2>Training Instructions - Introduction</h2>
      <HideButton
        isVideoHidden={isVideo1Hidden}
        localStorageKey={IS_VIDEO_1_HIDDEN}
        setVideoIsHidden={setVideo1Hidden}
        text="introduction"
      />
      <br />
      <br />
      <Collapse isOpen={!isVideo1Hidden}>
        <>
          <Video vimeoId="453755676" />
          <br />
          <br />
        </>
      </Collapse>
      <h2>Training Instructions - Daily practice</h2>
      <HideButton
        isVideoHidden={isVideo2Hidden}
        localStorageKey={IS_VIDEO_2_HIDDEN}
        setVideoIsHidden={setVideo2IsHidden}
        text="instruction"
      />
      <br />
      <br />
      <Collapse isOpen={!isVideo2Hidden}>
        <Video vimeoId={videoId} />
      </Collapse>

      <style jsx>{`
        h1 {
          text-align: center;
        }

        h2 {
          margin-bottom: 10px;
        }
      `}</style>
    </>
  );
};

interface ButtonProps {
  isVideoHidden: boolean;
  localStorageKey: string;
  setVideoIsHidden: (state: boolean) => void;
  text: string;
}

const HideButton: React.FC<ButtonProps> = (props) => {
  const { isVideoHidden, localStorageKey, setVideoIsHidden, text } = props;

  return (
    <Button
      icon={isVideoHidden ? 'eye-open' : 'eye-off'}
      outlined
      onClick={(e: React.MouseEvent<HTMLElement>) => {
        e.currentTarget.blur();
        const newState = !isVideoHidden;
        setVideoIsHidden(newState);
        localStorage.setItem(localStorageKey, `${newState}`);
      }}
    >
      {isVideoHidden ? 'Show' : 'Hide'} {text} video
    </Button>
  );
};
