import React from "react";

import { Video } from "../Video";

export const Background = () => (
  <div className="wrapper">
    <h1>
      Welcome!
      <br /> Here’s How the Training Works
    </h1>
    <Video src="https://vimeo.com/444051924/c12ac35f4c" />
    <br />
    <br />
    <h2>Welcome in! We’re glad you joined us.</h2>
    <p>OK, so watch the video above to see how the training works.</p>
    <p>It’s a daily training, just 10 minutes a day.</p>
    <p>We encourage you to set a reminder so you don’t forget.</p>
    <p>Find a space where you can practice uninterrupted for 10 minutes. </p>
    <p>
      Be as diligent as possible with the training, to get the benefits. But you
      don’t have to be “perfect.”
    </p>
    <p>Watch the video above, then answer a few short questions …</p>

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
