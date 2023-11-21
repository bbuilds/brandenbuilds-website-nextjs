import Link from "next/link";
import Image from "next/image";

export default function Services({ servicesList, skillsList }) {
  return (
    <>
      <section
        id="services"
        className="py-10 lg:py-20 bg-bbuilds-yellow text-bbuilds-black"
      >
        <div className="container mx-auto px-4">
          <header>
            <h2 id="trigger-services" className="text-center mb-10">
              Services && Skills
            </h2>
          </header>
          {servicesList && (
            <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {servicesList.map((service, index) => (
                <li
                  key={index}
                  data-aos="fade-right"
                  data-aos-anchor="#trigger-services"
                  className="flex items-center"
                  data-aos-delay={`${index}00`}
                >
                  <Link
                    href={service.url}
                    className="p-4 border border-bbuilds-black rounded w-full h-full transition duration-300 ease-in-out transform hover:-translate-y-2 hover:bg-bbuilds-black hover:text-bbuilds-yellow"
                  >
                    <h3 className="text-lg font-semibold leading-none">
                      {service.title}
                    </h3>
                    <p className="mt-2 leading-none">{service.copy}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <div className="skillset hidden md:block pt-10">
            <h3 className="text-center mb-4" id="trigger-stax">
              Tech Stax
            </h3>
            <p className="text-center max-w-4xl mx-auto mb-6">
              I enjoy using, but not limited to...
            </p>
            {skillsList && (
              <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skillsList.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center bg-bbuilds-gray text-center shadow-sm"
                    data-aos="fade-right"
                    data-aos-anchor="#trigger-stax"
                    data-aos-delay={`${index}00`}
                  >
                    <Image
                      src={skill.logo}
                      className={`p-1.5 bg-white h-12 w-12`}
                      height={40}
                      width={40}
                      alt={`${skill.title} Logo`}
                    />
                    <span className="ml-auto mr-auto">{skill.title}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
