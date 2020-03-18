import Document, { Html, Head, Main, NextScript } from 'next/document';
import Header from '../components/organisms/Header/Header';

import '../theme/theme.scss';
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Header />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  };
};