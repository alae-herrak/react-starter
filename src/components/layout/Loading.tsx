import { useLoading } from "@/context/loading-context";
import useTranslate from "@/hooks/use-translate";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const Loading = () => {
  const { isLoading } = useLoading();
  const t = useTranslate();

  if (!isLoading) return null;

  return (
    <div
      className={cn(
        "bg-background fixed inset-0 z-50 flex flex-col items-center justify-center gap-4",
      )}
    >
      {/* Spinner */}
      <div className="flex items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>

      {/* Messages */}
      <div>
        <div className="text-foreground mb-2 text-center text-lg">
          {t("applyingLanguageChanges")}
        </div>
        <div className="text-muted-foreground text-center text-sm">{t("pleaseWait")}</div>
      </div>
    </div>
  );
};

export default Loading;
