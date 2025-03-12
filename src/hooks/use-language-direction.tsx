import { Language } from "@/lib/definitions";
import { useEffect } from "react";

const useLanguageDirection = ({ language }: { language: Language }) => {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const isRTL = language === "ma";
    html.lang = language;
    body.dir = isRTL ? "rtl" : "ltr";

    body.classList.remove("font-almarai");
    body.classList.remove("font-roboto");
    body.classList.add(isRTL ? "font-almarai" : "font-roboto");
  }, [language]);
};

export default useLanguageDirection;
