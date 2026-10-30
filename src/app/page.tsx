import { Banner } from "@/components/banner";
import { Cta } from "@/components/cta";
import { Navbar } from "@/components/navbar";
import { Testimonials } from "@/components/testimonials";
import { WhyChoose } from "@/components/why-choose";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <WhyChoose />
      <Testimonials />
      <Cta />
    </main>
  );
}
