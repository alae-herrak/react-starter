import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import { Loading } from "@/components";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-provider";
import useLanguageDirection from "@/hooks/use-language-direction";

const App = () => {
  const { language } = useLanguage();

  useLanguageDirection({ language });

  return (
    <>
      <Routes>
        <Route path="/" element={<div>Hello World!</div>} />
      </Routes>

      <Loading />

      <Toaster
        dir={language === "ma" ? "rtl" : "ltr"}
        position={language === "ma" ? "bottom-left" : "bottom-right"}
        duration={2000}
        className={cn(language === "ma" ? "font-almarai" : "font-roboto")}
        richColors
      />
    </>
  );
};

export default App;
