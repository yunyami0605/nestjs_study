import "../styles/global.css";

interface Props {
  Component: React.ElementType;
  pageProps: any;
}

export default function App({ Component, pageProps }: Props) {
  return <Component {...pageProps} />;
}
