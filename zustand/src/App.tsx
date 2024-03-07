import { Link } from 'react-router-dom';
import { useStore } from './store';

export default function Home() {
  const { count, inc } = useStore();
  return (
    <main className="">
      <p>{ count }</p>
      <button onClick={inc}>increment</button>
      <Link to='dashboard'>go to dashboard</Link>
    </main>
  );
}
