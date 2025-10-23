import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-blue-600 dark:bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-lg">React Tasks</h1>
      <div className="flex gap-4 items-center">
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/posts">Posts</Link>
        <button
          onClick={toggleTheme}
          className="bg-white text-blue-600 px-2 py-1 rounded"
        >
          {theme === 'light' ? 'Dark' : 'Light'}
        </button>
      </div>
    </nav>
  );
}
