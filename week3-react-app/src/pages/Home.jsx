import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="text-center space-y-4">
      <Card>
        <h1 className="text-2xl font-bold mb-2">Welcome to React Tasks App</h1>
        <p>Manage tasks, fetch data, and enjoy a responsive Tailwind UI.</p>
        <div className="mt-4 flex justify-center gap-2">
          <Link to="/tasks"><Button>Go to Tasks</Button></Link>
          <Link to="/posts"><Button variant="secondary">View Posts</Button></Link>
        </div>
      </Card>
    </div>
  );
}
