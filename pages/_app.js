import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="dark:bg-secondary bg-white dark:text-white text-secondary">
        <div className="container">
          <Navbar />
          <NextNProgress
            height={4}
            color="#6C63FF"
            options={{ showSpinner: false }}
          />
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
