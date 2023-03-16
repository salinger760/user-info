import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { BASE_PATH } from '@/config'
import fonts from '@/utils/fonts'
import { GOOGLE_TAG_MANAGER_ID } from '@/config'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          {fonts.map((url, idx) => {
            return <link key={idx} href={url} rel="stylesheet" />
          })}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${BASE_PATH}/favicons/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`${BASE_PATH}/favicons/favicon-32x32.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`${BASE_PATH}/favicons/favicon-16x16.png`}
          />
          <link rel="manifest" href={`${BASE_PATH}/favicons/site.webmanifest`} />
          <link
            rel="mask-icon"
            href={`${BASE_PATH}/favicons/safari-pinned-tab.svg`}
            color="#000000"
          />
          <link rel="shortcut icon" href={`${BASE_PATH}/favicons/favicon.ico`} />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-config" content={`${BASE_PATH}/favicons/browserconfig.xml`} />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=${GOOGLE_TAG_MANAGER_ID}"
                height="0"
                width="0"
                style="display:none;visibility:hidden"
              />`,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
