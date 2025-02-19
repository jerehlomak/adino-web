import { Hero, About, Banner, News, Career } from '@/components';
import FadeInWrapper from '@/components/FadeInWrapper';

export default function Home() {
  return (
    <div>
      <FadeInWrapper>
        <Hero />
      </FadeInWrapper>
      <FadeInWrapper>
        <About />
      </FadeInWrapper>
      <FadeInWrapper>
        <Banner />
      </FadeInWrapper>
      <FadeInWrapper>
        <News />
      </FadeInWrapper>
      <FadeInWrapper>
        <Career />
      </FadeInWrapper>
    </div>
  );
}
