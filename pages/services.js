import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { PageSEO } from "@/components/SEO";
import siteMetaData from "@/data/siteMetaData";
import servicesStyles from "@/styles/all-services.module.css";
import { servicesDetailed } from "@/data/servicesData";

function AllServicesPage() {
  return (
    <Layout>
      <PageSEO
        title={`Web Development, UX Research, and Story Telling Services`}
        description={
          "I enjoy each step of creating digital expierences that prioneer brands."
        }
      />
      <article>
        <PageHeader
          title={`Branden Builds Web Development | Branding | SEO Freelance Services`}
          copy={`I enjoy each step of creating digital expierences that prioneer brands.`}
        />
        <section className="bg-bbuilds-yellow py-10 lg:py-20">
          <div className="mx-auto max-w-3xl px-4">
            <ul>
              {servicesDetailed &&
                servicesDetailed.map((service, index) => {
                  return (
                    <li
                      className={cn(
                        "mb-10 service block md:flex items-center p-4 border border-bbuilds-black rounded w-full h-full transition duration-300 ease-in-out relative",
                        servicesStyles["service"],
                      )}
                      data-aos="fade-up"
                      key={index}
                    >
                      <picture className="md:p-8 block w-1/4 md:w-1/2">
                        <Image
                          src={service.image}
                          alt={`${service.title} Illustration`}
                          width={324}
                          height={400}
                          layout={"responsive"}
                        />
                      </picture>
                      <div className="py-8">
                        <Link href={service.url} className="link-shield">
                          <h6 className="text-xl font-semibold leading-none mb-4">
                            {service.title}
                          </h6>
                        </Link>
                        <p className="mt-2">{service.tagline}</p>
                        {service.specialities && (
                          <ul className="mt-4 disc">
                            {service.specialities.map((speciality, index) => {
                              return <li key={index}>{speciality}</li>;
                            })}
                          </ul>
                        )}
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </section>
      </article>
    </Layout>
  );
}

export default AllServicesPage;
