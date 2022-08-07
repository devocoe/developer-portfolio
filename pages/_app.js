import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="dark:bg-secondary bg-white dark:text-white text-secondary">
        <div className="container">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
