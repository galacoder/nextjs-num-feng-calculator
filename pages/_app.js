import App from "next/app";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron } from "../styletron";
import Layout from "../layout/Layout";

// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";

// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";

// used for collection views (optional)
import "rc-dropdown/assets/index.css";

// used for rendering equations (optional)
import "katex/dist/katex.min.css";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <StyletronProvider value={styletron}>
          <Component {...pageProps} />
        </StyletronProvider>
      </Layout>
    );
  }
}
