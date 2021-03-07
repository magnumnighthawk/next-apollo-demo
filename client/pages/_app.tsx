import { ApolloProvider } from "@apollo/client";
import { Helmet } from "react-helmet";
import { useApollo } from "lib/apolloClient";
import { AppProps } from "next/app";
import GlobalStyles from "styles";

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <>
      <GlobalStyles />
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>Nextjs GraphQL demo</title>
        <meta name="description" content="Helmet application" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ApolloProvider client={apolloClient}>
        <div>
          <Component {...pageProps} />
        </div>
      </ApolloProvider>
    </>
  );
}
