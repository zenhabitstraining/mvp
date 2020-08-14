import React from 'react';

export const Pending = () => {
  return (
    <div className="wrapper">
      <h1>Thank-you!</h1>
      <br />
      <p>We're just finalizing the protocol.</p>
      <br />
      <p>We'll send you an email the program is ready for you to start.</p>

      <style jsx>{`
        .wrapper {
          margin-top: 40px;
        }

        h1 {
          text-align: center;
        }

        p {
          text-align: center;
        }
      `}</style>
    </div>
  );
};
