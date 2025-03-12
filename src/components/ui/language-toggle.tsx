import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/context/language-provider";
import { useLoading } from "@/context/loading-context";
import useTranslate from "@/hooks/use-translate";
import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { toast } from "sonner";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const t = useTranslate();
  const { showLoading, hideLoading } = useLoading();

  const [selectedLanguage, setSelectedLanguage] = useState(language);
  const [languageChanged, setLanguageChanged] = useState(false);

  const handleSaveLanguage = () => {
    const languageHasChanged = selectedLanguage !== language;
    if (!languageHasChanged) return;

    setLanguageChanged(true);
    setLanguage(selectedLanguage);

    showLoading();
    setTimeout(() => {
      hideLoading();
    }, 5000);
  };

  useEffect(() => {
    handleSaveLanguage();
  }, [selectedLanguage]);

  useEffect(() => {
    if (languageChanged) {
      setTimeout(() => {
        toast.success(t("languageChangeSuccess"));
      }, 5000);
      setLanguageChanged(false);
    }
  }, [languageChanged, t]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer" asChild>
        <Button variant="ghost" size="icon">
          <ReactCountryFlag countryCode={language} svg />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setSelectedLanguage("fr")}>
          <ReactCountryFlag countryCode="fr" svg /> Français
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setSelectedLanguage("ma")}>
          <ReactCountryFlag countryCode="ma" svg /> العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
