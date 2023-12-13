"use client";

import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";
import { Icons } from "./icons";

const ThemeSelect = () => {
  const { setTheme, theme } = useTheme();
  return (
    <Select
      onValueChange={(ev) => {
        setTheme(ev);
      }}
    >
      <SelectTrigger className="w-fit h-8 flex gap-1">
        {theme == "light" ? (
          <Icons.sun className="w-3 h-3" />
        ) : theme == "dark" ? (
          <Icons.moon className="w-3 h-3" />
        ) : (
          <Icons.system className="w-3 h-3" />
        )}
        {theme}
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ThemeSelect;
