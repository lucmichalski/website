import { useDarkMode } from './useDarkMode';
import Toggle from './Toggle';

const Footer: React.FC = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  if (!componentMounted) return null

  return (
    <footer>
      <Toggle theme={theme} toggleTheme={toggleTheme} />
    </footer>
  )
}
export default Footer