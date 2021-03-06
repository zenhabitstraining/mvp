import React from 'react';

import { User } from '@/types/user';
import { SessionIntroVideos } from './SessionIntroVideos';
import { SessionResultsForm } from './SessionResultsForm';
import { today } from '@/constants/datetime';
import { Callout } from '@blueprintjs/core';

interface Props {
  instructions: string[];
  isIntervalsVisible?: boolean;
  isWhyVisible?: boolean;
  setUser: (user: User) => void;
  user: User;
  videoId: string;
}

export const Template: React.FC<Props> = (props) => {
  const {
    instructions,
    isIntervalsVisible,
    isWhyVisible,
    setUser,
    user,
    videoId,
  } = props;

  return (
    <>
      <SessionIntroVideos videoId={videoId} />
      <br />
      <h3>Basic Instructions</h3>
      <ol>
        {instructions.map((instruction, idx) => (
          <li key={idx}>{instruction}</li>
        ))}
      </ol>
      {user.latest_session === today ? (
        <Callout intent="success" title="Training complete">
          Thank you for training! Come back tomorrow to try again.
        </Callout>
      ) : (
        <>
          {user.interval_goal && (
            <Callout intent="primary" title="Interval breath maximum">
              Once you get to{' '}
              <strong style={{ fontWeight: 700 }}>
                {user.interval_goal} breaths
              </strong>
              , take a small break and start counting again at 1. This number
              will change as you progress, so please make sure to check it at
              the start of each session.
            </Callout>
          )}
          <SessionResultsForm
            isIntervalsVisible={isIntervalsVisible}
            isWhyVisible={isWhyVisible}
            setUser={setUser}
            user={user}
          />
        </>
      )}

      <style jsx>{`
        ol {
          margin: 0 0 40px;
          padding: 0 0 0 20px;
        }

        li {
          margin-bottom: 10px;
        }
      `}</style>
    </>
  );
};
