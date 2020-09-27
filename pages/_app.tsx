import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';

// Styles from node_modules
import 'normalize.css/normalize.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import 'nprogress/nprogress.css';

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
        font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont,
          'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue',
          sans-serif;
        min-height: 100vh;
      }

      .content-wrapper {
        background-color: rgba(245, 248, 250, 0.6);
        border-radius: 5px;
        margin: 0 auto;
        max-width: 700px;
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

      h3 {
        font-weight: 300;
        font-size: 22px;
      }

      p,
      ul,
      ol {
        font-weight: 300;
        font-size: 18px;
      }

      strong {
        font-weight: 400;
      }

      .bp3-callout .bp3-heading:last-child {
        margin-bottom: 5px !important;
      }
    `}</style>
  </>
);

export default MindfulnessApp;
