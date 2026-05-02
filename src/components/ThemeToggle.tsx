import { useState, useEffect } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Theme = "light" | "dark" | "system";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme("system");
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    
    if (newTheme === "system") {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.toggle("dark", systemPrefersDark);
      root.classList.toggle("light", !systemPrefersDark);
    } else {
      root.classList.toggle("dark", newTheme === "dark");
      root.classList.toggle("light", newTheme === "light");
    }
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4" />;
      case "dark":
        return <Moon className="h-4 w-4" />;
      default:
        return <Monitor className="h-4 w-4" />;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 text-muted-foreground hover:text-foreground"
        >
          {getIcon()}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card border-border w-52">
        <DropdownMenuItem
          onClick={() => handleThemeChange("light")}
          className={`cursor-pointer gap-3 py-2 ${theme === "light" ? "text-primary" : ""}`}
        >
          <div className="w-10 h-7 rounded border border-border overflow-hidden flex flex-shrink-0 shadow-sm">
            <div className="flex-1 bg-[#f5efe6]" />
            <div className="w-2 bg-[#b8552a]" />
          </div>
          <Sun className="h-4 w-4" />
          <span className="flex-1">Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleThemeChange("dark")}
          className={`cursor-pointer gap-3 py-2 ${theme === "dark" ? "text-primary" : ""}`}
        >
          <div className="w-10 h-7 rounded border border-border overflow-hidden flex flex-shrink-0 shadow-sm">
            <div className="flex-1 bg-[#0a0e14]" />
            <div className="w-2 bg-[#22d3ee]" />
          </div>
          <Moon className="h-4 w-4" />
          <span className="flex-1">Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleThemeChange("system")}
          className={`cursor-pointer gap-3 py-2 ${theme === "system" ? "text-primary" : ""}`}
        >
          <div className="w-10 h-7 rounded border border-border overflow-hidden flex flex-shrink-0 shadow-sm">
            <div className="flex-1 bg-[#f5efe6]" />
            <div className="flex-1 bg-[#0a0e14]" />
          </div>
          <Monitor className="h-4 w-4" />
          <span className="flex-1">System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;
