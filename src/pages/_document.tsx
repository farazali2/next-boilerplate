import Document, { Html, Head, Main, NextScript } from 'next/document';
import { isRTL } from '../utils/translation.helpers';

class MyDocument extends Document {
  render() {
    const RTL = isRTL(this.props.locale as string);
    return (
      <Html dir={RTL ? 'rtl' : 'ltr'}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
