import type { AppProps } from "next/app";
import { Provider } from "next-auth/client";

// Styles from node_modules
import "normalize.css/normalize.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";

const MindfulnessApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <div className="page-wrapper">
    <div className="content-wrapper">
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </div>

    <style jsx>{`
      .page-wrapper {
        background-color: #f5f8fa;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23e1e8ed' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23bfccd6' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23dde5ea' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23bac8d2' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23d9e2e8' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23b5c3ce' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23d6dfe5' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23b1bfca' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23d2dce3' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23acbac6' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23ced9e0' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23a7b6c2' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
        background-attachment: fixed;
        background-size: cover;
        min-height: 100vh;
        padding-bottom: 30px;
      }

      .content-wrapper {
        background-color: rgba(245, 248, 250, 0.6);
        border-radius: 5px;
        margin: 0 auto;
        max-width: 650px;
        padding: 20px;
      }
    `}</style>
  </div>
);

export default MindfulnessApp;
