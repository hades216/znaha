import { Hero, Services, Portfolio, Testimonials, Blog } from '../components/Sections';

export function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Blog />
    </main>
  );
}
