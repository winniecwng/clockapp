import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createOvermind } from "overmind";
import { config } from "../overmind";
import { Provider } from "overmind-react";

const overmind = createOvermind(config);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={overmind}>
      <Component {...pageProps} />
    </Provider>
  );
}
