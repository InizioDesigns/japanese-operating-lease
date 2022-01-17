import Document, { Html, Head, Main, NextScript } from 'next/document'
import { withRouter } from 'next/router'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/png" href="/lib/img/favicon.png" />
          <meta name="google-site-verification" content="QW9cw1P_7U_NzC1FeWDQthnDFvnV1NJH8Db58wAjGOg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument