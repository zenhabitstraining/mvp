import Head from "next/head";
import type { AppProps } from "next/app";
import { Provider } from "next-auth/client";

// Styles from node_modules
import "normalize.css/normalize.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";

const MindfulnessApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;1,300;1,400&display=swap"
        rel="stylesheet"
      />
    </Head>

    <div className="page-wrapper">
      <div className="content-wrapper">
        <Provider session={pageProps.session}>
          <Component {...pageProps} />
        </Provider>
      </div>
    </div>

    <style jsx>{`
      .page-wrapper {
        background-attachment: fixed;
        font-family: "Nunito Sans", -apple-system, BlinkMacSystemFont,
          "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue",
          sans-serif;
        min-height: 100vh;
        padding-bottom: 30px;
      }

      .content-wrapper {
        background-color: rgba(245, 248, 250, 0.6);
        border-radius: 5px;
        margin: 0 auto;
        max-width: 660px;
        padding: 20px;
      }
    `}</style>

    <style jsx global>{`
      h1 {
        font-weight: 300;
        font-size: 36px;
      }

      h2 {
        font-weight: 300;
        font-size: 27px;
      }

      p,
      ul {
        font-weight: 300;
        font-size: 18px;
      }

      strong {
        font-weight: 400;
      }
    `}</style>
  </>
);

export default MindfulnessApp;
