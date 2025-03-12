import { MoonStar, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/theme-provider";
import { cn } from "@/lib/utils";

export function ModeToggle({
  variant,
  className,
  iconColor,
}: {
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost";
  className?: string;
  iconColor?: string;
}) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className={className}
      variant={variant || "outline"}
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <MoonStar
        className={cn("size-5 scale-100 rotate-0 dark:scale-0 dark:-rotate-90", iconColor)}
      />
      <Sun
        className={cn("absolute size-5 scale-0 rotate-90 dark:scale-100 dark:rotate-0", iconColor)}
      />
    </Button>
  );
}
