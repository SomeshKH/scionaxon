import { Sun, Moon } from 'lucide-react';
import { Button } from '../../../ui/button';
import { useTheme } from '../../../application/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="flex items-center gap-2 w-full justify-center"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      <div>{theme === 'dark' ? 'Light' : 'Dark'}</div>
    </Button>
  );
}
