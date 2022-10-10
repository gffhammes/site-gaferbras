import "../styles/globals.css";
import type { AppProps } from "next/app";
import { motion, AnimatePresence } from "framer-motion";
import { HeadPageTitle } from "../src/components/common/HeadPageTitle";
import { NavBar } from "../src/components/common/NavBar/NavBar";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { Footer } from "../src/components/common/Footer/Footer";
import { ProgressBar } from "../src/components/common/ProgressBar";
import "../styles/progress-bar.css";
import { SnackbarProvider } from "notistack";
import { ContactContextProvider } from "../src/contexts/Contact/ContactContext";

const theme = createTheme({
  palette: {
    primary: { main: "#3F3C9A", light: "#3f3c9a81" },
    secondary: { main: "#FE3C44" },
  },
});

theme.typography.h1 = {
  fontWeight: 500,
  lineHeight: 1.3,
  fontSize: "2.5rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: 54,
  },
};

function MyApp({ Component, pageProps, router }: AppProps) {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <ThemeProvider theme={theme}>
      <ContactContextProvider>
        <SnackbarProvider
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <ProgressBar />
          <HeadPageTitle />
          <NavBar />
          <AnimatePresence exitBeforeEnter>
            <motion.main
              key={router.route}
              variants={variants}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{ type: "linear" }}
            >
              <Component {...pageProps} />
            </motion.main>
          </AnimatePresence>
          <Footer />
        </SnackbarProvider>
      </ContactContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
