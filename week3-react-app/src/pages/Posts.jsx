import { useState, useEffect } from 'react';
import Card from '../components/Card';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filtered = posts.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <input
        type="text"
        className="border px-3 py-2 mb-4 w-full rounded"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid gap-4">
        {filtered.slice(0, 20).map(p => (
          <Card key={p.id}>
            <h3 className="font-bold">{p.title}</h3>
            <p>{p.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
