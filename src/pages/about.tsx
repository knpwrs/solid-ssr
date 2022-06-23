import { createEffect, createResource, Suspense } from 'solid-js';
import { styled } from 'solid-styled-components';

const AboutTitle = styled('h1')({
  color: 'blue',
});

function wait<T>(ms: number, data: T): Promise<T> {
  return new Promise((resolve) => setTimeout(resolve, ms, data));
}

function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fetchName(): Promise<string> {
  return wait(random(500, 1000), 'Solid');
}

export default function About() {
  const [name] = createResource(fetchName, { deferStream: true });

  createEffect(() => {
    console.log(name());
  });

  return (
    <section>
      <AboutTitle>About</AboutTitle>

      <p>A page all about this website.</p>

      <p>
        <span>We love</span>
        <Suspense fallback={<span>...</span>}>
          <span>&nbsp;{name()}</span>
        </Suspense>
      </p>
    </section>
  );
}
