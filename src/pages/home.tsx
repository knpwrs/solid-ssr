import { createSignal } from 'solid-js';
import { styled } from 'solid-styled-components';

const HomeTitle = styled('h1')({
  color: 'green',
});

export default function Home() {
  const [count, setCount] = createSignal(0);

  return (
    <section>
      <HomeTitle>Home</HomeTitle>
      <p>This is the home page.</p>

      <div>
        <button onClick={() => setCount(count() - 1)}>-</button>

        <output>Count: {count}</output>

        <button onClick={() => setCount(count() + 1)}>+</button>
      </div>
    </section>
  );
}
