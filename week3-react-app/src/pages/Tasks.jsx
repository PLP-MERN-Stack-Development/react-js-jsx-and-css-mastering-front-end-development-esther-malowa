import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Button from '../components/Button';
import Card from '../components/Card';

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  };

  const toggleTask = (id) =>
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));

  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));

  const filtered = tasks.filter(t =>
    filter === 'completed' ? t.completed :
    filter === 'active' ? !t.completed : true
  );

  return (
    <div className="space-y-4">
      <Card>
        <h2 className="text-xl font-bold mb-2">Task Manager</h2>
        <div className="flex gap-2">
          <input
            className="border px-2 py-1 flex-1 rounded"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter task"
          />
          <Button onClick={addTask}>Add</Button>
        </div>

        <div className="flex gap-2 mt-3">
          <Button variant={filter === 'all' ? 'primary' : 'secondary'} onClick={() => setFilter('all')}>All</Button>
          <Button variant={filter === 'active' ? 'primary' : 'secondary'} onClick={() => setFilter('active')}>Active</Button>
          <Button variant={filter === 'completed' ? 'primary' : 'secondary'} onClick={() => setFilter('completed')}>Completed</Button>
        </div>
      </Card>

      {filtered.map(t => (
        <Card key={t.id}>
          <div className="flex justify-between items-center">
            <span className={`${t.completed ? 'line-through text-gray-500' : ''}`}>{t.text}</span>
            <div className="flex gap-2">
              <Button variant="secondary" onClick={() => toggleTask(t.id)}>
                {t.completed ? 'Undo' : 'Done'}
              </Button>
              <Button variant="danger" onClick={() => deleteTask(t.id)}>Delete</Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
