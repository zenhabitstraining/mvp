import React from "react";

import { Video } from "../Video";

export const Intro = () => (
  <div className="wrapper">
    <h1>Welcome to the Mindfulness Protocol</h1>
    <p className="intro bp3-text-large">
      The new mindfulness training and experiment by{" "}
      <strong>Leo Babauta</strong> of{" "}
      <a href="https://https://zenhabits.net/">Zen Habits</a>.
    </p>
    <Video src="https://player.vimeo.com/video/444049675" />
    <br />
    <br />
    <h2>We invite you to join us!</h2>
    <p className="bp3-text-large">
      We’re offering a daily training system to:
      <ul>
        <li>
          Increase <strong>focus</strong>
        </li>
        <li>
          Improve <strong>mindfulness</strong>
        </li>
        <li>
          Cope with <strong>stress</strong>
        </li>
        <li>
          Be better at <strong>habit creation</strong>
        </li>
        <li>
          Be more <strong>compassionate</strong>
        </li>
      </ul>
      It will only take 10 minutes a day, and it’s{" "}
      <strong>completely free</strong>. You’ll also be helping to contribute to
      our experiment to create an evidence-based method to train the mind.
    </p>

    <style jsx>{`
      .wrapper {
        margin-top: 40px;
      }

      h1 {
        text-align: center;
      }

      .intro {
        text-align: center;
        margin-bottom: 30px;
      }
    `}</style>
  </div>
);
