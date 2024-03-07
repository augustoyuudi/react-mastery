import { useStore } from '../store';

export default function Dashboard() {
  const { count, inc } = useStore();
  return (
    <section>
      <h1>hello dashboard</h1>
      <p>{ count }</p>
      <button onClick={inc}>inc dash</button>
    </section>
  );
}