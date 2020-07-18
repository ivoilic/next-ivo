import Document, { Html, Head, Main, NextScript } from 'next/document';

// eslint-disable-next-line prefer-destructuring
const GA_TRACKING_ID = process.env.GA_TRACKING_ID;

export default class Doc extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body data-preload>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
