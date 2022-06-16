import { styled } from 'solid-styled-components';

const ErrorTitle = styled('h1')({
  color: 'red',
});

export default function NotFound() {
  return (
    <section>
      <ErrorTitle>404: Not Found</ErrorTitle>
      <p>It's gone 😞</p>
    </section>
  );
}
