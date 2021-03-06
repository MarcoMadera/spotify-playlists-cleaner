import "../styles/globals.css";
import { UserContextProvider } from "../context/UserContext";
import { SpotifyContextProvider } from "../context/SpotifyContext";
import type { AppProps } from "next/app";
import { ReactElement } from "react";
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <UserContextProvider>
      <SpotifyContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SpotifyContextProvider>
    </UserContextProvider>
  );
};

export default MyApp;
