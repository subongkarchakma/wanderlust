import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Michael Chen",
    location: "Singapore",
    quote:
      '"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."',
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=640&auto=format&fit=crop",
  },
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    quote:
      '"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breataking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"',
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=640&auto=format&fit=crop",
  },
  {
    name: "David Mensah",
    location: "London, UK",
    quote:
      '"The Santorini Getaway Was Flawless From Start To Finish. Every Island View Was Postcard-Perfect And The Team Handled Everything Seamlessly."',
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=640&auto=format&fit=crop",
  },
  {
    name: "Amelia Rossi",
    location: "Sydney, Australia",
    quote:
      '"Kyoto In Cherry Blossom Season Was A Dream. Our Local Guide Brought Every Temple And Street To Life With Stories We Will Never Forget."',
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=640&auto=format&fit=crop",
  },
];

const controlClasses =
  "static inset-y-auto left-auto right-auto my-0 size-11 border-slate-200 text-slate-700 hover:bg-slate-50";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <Carousel
          opts={{ align: "start", loop: true }}
          aria-label="Traveler testimonials"
        >
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl">
                What Travelers Say
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Real experiences from our happy travelers
              </p>
            </div>
            <div className="flex gap-3">
              <CarouselPrevious className={controlClasses} />
              <CarouselNext className={controlClasses} />
            </div>
          </div>

          <CarouselContent className="-ml-6 mt-10">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.name} className="basis-full pl-6 lg:basis-1/2">
                <figure className="flex border border-slate-200 bg-white shadow-sm">
                  <blockquote className="flex flex-1 flex-col p-7">
                    <p className="font-heading text-lg leading-snug text-slate-900">
                      {testimonial.quote}
                    </p>
                    <figcaption className="mt-auto pt-6">
                      <div className="text-sm font-semibold text-cyan-600">
                        — {testimonial.name}
                      </div>
                      <div className="mt-0.5 text-xs text-slate-500">
                        {testimonial.location}
                      </div>
                    </figcaption>
                  </blockquote>
                  <div className="relative w-40 shrink-0 md:w-44">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="192px"
                      className="object-cover"
                    />
                  </div>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
