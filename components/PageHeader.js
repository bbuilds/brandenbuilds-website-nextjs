import BrandCube from "@/components/BrandCube";
import Link from "next/link";

export default function PageHeader({ title, copy, cta = "Talk Nerdy to Me" }) {
  return (
    <header
      id="services-hero"
      className="py-16 bg-bbuilds-black text-bbuilds-gray flex flex-wrap items-center relative"
    >
      <div className="container mx-auto px-4 pb-20 relative z-10">
        <h1
          className="text-xl mb-2 md:text-3xl lg:max-w-2/3"
          data-aos="fade-up"
        >
          {title}
        </h1>
        {copy && (
          <p className="my-6 md:w-1/2" data-aos="fade-up">
            {copy}
          </p>
        )}
        <Link
          href="/contact"
          className="button inline-block mt-2"
          data-aos="fade-up"
        >
          {cta}
        </Link>
      </div>
      <div className="hero-brand-cube absolute right-0 bottom-0 max-w-1/2 md:max-w-1/4">
        <BrandCube />
      </div>
    </header>
  );
}
