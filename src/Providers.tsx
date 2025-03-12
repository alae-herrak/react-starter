import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/context/theme-provider";
import { LanguageProvider, useLanguage } from "@/context/language-provider";
import { IntlProvider } from "react-intl";
import FrenchMessages from "@/locales/fr.json";
import ArabicMessages from "@/locales/ma.json";
import { LoadingProvider } from "@/context/loading-context";

const messages = {
  fr: FrenchMessages,
  ma: ArabicMessages,
};

const LanguageConsumer = ({ children }: { children: React.ReactNode }) => {
  const { language } = useLanguage();

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      {children}
    </IntlProvider>
  );
};

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <LanguageProvider defaultLanguage="fr" storageKey="app-language">
          <LanguageConsumer>
            <LoadingProvider>{children}</LoadingProvider>
          </LanguageConsumer>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Providers;
