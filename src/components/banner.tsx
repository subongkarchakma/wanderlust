import Image from "next/image";
import { ArrowRight } from "lucide-react";

import BannerImage from "../../public/images/Banner.png";

const searchFields = [
  {
    label: "Location",
    name: "location",
    placeholder: "Address, City Or Zip",
  },
  {
    label: "Date/Duration",
    name: "dates",
    placeholder: "Anytime / 3 Days",
  },
  {
    label: "Budget",
    name: "budget",
    placeholder: "$0-$5000",
  },
  {
    label: "People",
    name: "people",
    placeholder: "0-10",
  },
] as const;

export function Banner() {
  return (
    <section className="relative isolate flex h-[85svh] min-h-[560px] flex-col overflow-hidden text-white">
      <Image
        src={BannerImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

      <div className="flex flex-1 flex-col items-center justify-center px-4 pb-16 pt-10 text-center">
        <h1 className="text-balance text-4xl font-light leading-tight sm:text-6xl">
          Discover Your
          <br />
          Next Adventure
        </h1>
        <p className="mt-4 max-w-xl text-pretty text-sm text-white/90 sm:text-base">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#destinations"
            className="inline-flex items-center gap-2 rounded-sm bg-cyan-500 px-6 py-3 text-xs font-bold tracking-widest uppercase transition-colors hover:bg-cyan-600"
          >
            Explore Now
            <ArrowRight className="size-4" aria-hidden />
          </a>
          <a
            href="#destinations"
            className="rounded-sm bg-white/60 px-6 py-3 text-xs font-bold tracking-widest text-slate-800 uppercase transition-colors hover:bg-white/75"
          >
            View Destination
          </a>
        </div>
      </div>

      <form
        action="/search"
        className="grid grid-cols-2 border-t border-white/15 md:grid-cols-5"
      >
        {searchFields.map((field) => (
          <label
            key={field.name}
            className="flex flex-col gap-0.5 border-l border-white/10 bg-white/10 px-4 py-3 backdrop-blur-sm transition-colors first:border-l-0 hover:bg-white/15 max-md:even:border-l-0 max-md:[&:nth-child(n+3)]:border-t"
          >
            <span className="text-sm font-semibold">{field.label}</span>
            <input
              type="text"
              name={field.name}
              placeholder={field.placeholder}
              className="w-full bg-transparent text-sm outline-none placeholder:text-white/60"
            />
          </label>
        ))}
        <button
          type="submit"
          className="col-span-2 bg-cyan-500 px-8 text-sm font-semibold transition-colors hover:bg-cyan-600 md:col-span-1"
        >
          Search
        </button>
      </form>
    </section>
  );
}
