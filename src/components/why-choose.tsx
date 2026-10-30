import Image from "next/image";

import ShieldCheckIcon from "../../public/images/ShieldCheck.png";
import MapTrifoldIcon from "../../public/images/MapTrifold.png";
import HeadsetIcon from "../../public/images/Headset.png";

const features = [
  {
    icon: ShieldCheckIcon,
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: MapTrifoldIcon,
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: HeadsetIcon,
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-cyan-50 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl sm:text-4xl">
            Why Choose Wanderlust
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-slate-200 bg-white p-8 shadow-sm"
            >
              <Image src={feature.icon} alt="" className="h-8 w-auto" />
              <h3 className="mt-5 font-heading text-xl sm:text-2xl">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-slate-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
