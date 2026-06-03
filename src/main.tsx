import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

// Sync <html lang> with saved language preference (en | hi | mr)
const savedLang = localStorage.getItem("language");
if (savedLang && ["en", "hi", "mr"].includes(savedLang)) {
  document.documentElement.lang = savedLang;
}

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
