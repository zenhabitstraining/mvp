import React from 'react';
import { Button } from '@blueprintjs/core';

const randomInt = (max: number, min: number = 0) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const groupKeys = ['A', 'B', 'C', 'D', 'E'];

export const Pending = () => {
  const randomGroup = groupKeys[randomInt(groupKeys.length - 1)];

  return (
    <div className="wrapper">
      <h1>Thank you!</h1>
      <br />
      <p>Click the button below to view your first session.</p>
      <br />
      <Button
        intent="primary"
        large
        onClick={() => {
          alert('group ' + randomGroup);
        }}
      >
        Start session
      </Button>
      <br />
      <br />
      <br />

      <style jsx>{`
        .wrapper {
          margin-top: 40px;
        }

        h1 {
          margin-bottom: 10px;
        }

        p {
          margin-bottom: 20px;
        }

        div {
          text-align: center;
        }
      `}</style>
    </div>
  );
};
