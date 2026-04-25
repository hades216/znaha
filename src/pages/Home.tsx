import { Hero, Services, Portfolio, Testimonials, Blog, HomeContact } from '../components/Sections';

export function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Blog />
      <HomeContact />
    </main>
  );
}
