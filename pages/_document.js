import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const style = { padding: "O" };

  return (
    <Html lang="en">
      <Head />
      <body style={style}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
