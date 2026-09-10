import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Register service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/pwa_offline_notes_lab/sw.js", {
        scope: "/pwa_offline_notes_lab/",
      })
      .catch((error) =>
        console.warn("Service worker registration failed", error)
      );
  });
}