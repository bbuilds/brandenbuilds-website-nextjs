import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-bbuilds-black w-full pt-4 pb-6">
      <div className="container mx-auto px-4">
        <p className="text-center text-bbuilds-gray">
          Copyright &copy; {new Date().getFullYear()} Branden Builds LLC.{" "}
          <Link href={`/sitemap.xml`}>Sitemap</Link>
        </p>
      </div>
    </footer>
  );
}
