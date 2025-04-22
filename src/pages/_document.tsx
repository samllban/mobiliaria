import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <link rel="preload" href="/bg1.webp" as="image" />
        <link rel="preload" href="/bg2.webp" as="image" />
        <link rel="preload" href="/bg3.webp" as="image" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
