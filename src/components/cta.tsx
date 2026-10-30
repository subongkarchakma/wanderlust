import Image from "next/image";
import { ArrowRight } from "lucide-react";

import CtaImage from "../../public/images/CTA.png";

export function Cta() {
  return (
    <section className="relative isolate flex min-h-[440px] items-center justify-center overflow-hidden px-4 py-24 text-center text-white">
      <Image
        src={CtaImage}
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/40" />

      <div className="max-w-2xl">
        <h2 className="font-heading text-3xl sm:text-5xl">
          Ready To Start Your Journey?
        </h2>
        <p className="mt-3 text-sm text-white/90 sm:text-base">
          Join thousands of travelers who have discovered the world with us
        </p>
        <a
          href="#booking"
          className="mt-8 inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3 text-xs font-bold tracking-widest text-slate-900 uppercase transition-colors hover:bg-slate-100"
        >
          Book Your Trip Today
          <ArrowRight className="size-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}
