import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/context/theme-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        {children}
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Providers;
