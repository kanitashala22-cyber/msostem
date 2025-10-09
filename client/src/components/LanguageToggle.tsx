import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      data-testid="button-language-toggle"
      aria-label="Toggle language"
      title={language === "en" ? "Switch to Albanian" : "Kalo në anglisht"}
    >
      <Languages className="h-5 w-5" />
      <span className="ml-2 text-xs font-medium">
        {language === "en" ? "EN" : "SQ"}
      </span>
    </Button>
  );
}
