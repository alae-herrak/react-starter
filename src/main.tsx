import { createRoot } from "react-dom/client";
import "@/index.css";
import Providers from "@/Providers.tsx";
import App from "@/App.tsx";

createRoot(document.getElementById("root")!).render(
  <Providers>
    <App />
  </Providers>,
);
