import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import navStyles from "@/styles/nav.module.css";

export default function Nav({ navItems }) {
  const router = useRouter();
  return (
    <>
      <ul
        className={cn(
          "hidden px-2 space-x-6 items-center md:flex md:space-x-12 ml-auto mr-auto",
          navStyles["nav-items"],
        )}
      >
        {navItems.map((item) => {
          return (
            <li
              key={item.title}
              className={cn("relative group", navStyles["menu-item"])}
            >
              <Link
                href={`${item.href}`}
                className={cn(
                  "text-bbuilds-teal hover:text-bbuilds-yellow",
                  router.pathname == item.href ? navStyles["active"] : "",
                )}
              >
                {item.title}
              </Link>

              {item.children && (
                <div
                  className={cn(
                    "md:absolute md:z-50 md:rounded  md:shadow-lg md:bg-bbuilds-black md:text-white md:border-bbuilds-yellow md:border transition duration-200",
                    navStyles["dropdown-menu"],
                  )}
                >
                  <ul className="list-none overflow-hidden w-full">
                    {item.children.map((child) => {
                      return (
                        <li key={child.title} className="menu-item">
                          <Link
                            href={`${child.href}`}
                            className="flex text-bbuilds-teal py-2 px-4 transition duration-300 hover:bg-bbuilds-yellow hover:text-bbuilds-black"
                          >
                            {child.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
