import Hero from "@/components/Hero";
import { HowWeWork } from "@/components/HowWeWork";
import { Portfolio } from "@/components/Portfolios";
import { Services } from "@/components/Services";
import CTA from "@/components/subcomponents/CTA";
import { WhyChooseUs } from "@/components/WhychhoseUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <CTA />
      <Services />
      <HowWeWork />
      <Portfolio />
    </div>
  );
}
