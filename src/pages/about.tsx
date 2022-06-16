import { createEffect, Suspense } from 'solid-js';
import { useRouteData } from 'solid-app-router';
import { styled } from 'solid-styled-components';

const AboutTitle = styled('h1')({
  color: 'blue',
});

export default function About() {
  const name = useRouteData<() => string>();

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
