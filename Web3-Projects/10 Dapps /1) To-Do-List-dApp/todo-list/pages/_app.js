import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <div class="main__bg"></div>
      <div class="main__bg layer1"></div>
      <div class="main__bg layer2"></div>
    </>
  );
}

export default MyApp;
