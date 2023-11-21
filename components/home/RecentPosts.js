import Link from "next/link";
import PostCard from "@/components/PostCard";

export default function RecentPosts({ posts }) {
  const recentPosts = posts.slice(0, 3);

  return (
    <section id="recent-posts" className="bg-bbuilds-gray py-10 lg:py-20">
      <div className="container mx-auto px-4">
        <h2 id="trigger-articles" className=" mt-6 mb-16 text-center text-h2">
          Recent Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-x-4">
          {recentPosts.map((post, index) => {
            return (
              <div
                key={index}
                className="posts-grid__item"
                data-aos="fade-right"
                data-aos-anchor="#trigger-articles"
                data-aos-delay={`${index}00`}
              >
                <PostCard post={post} />
              </div>
            );
          })}
        </div>
        <div className="text-center pt-10">
          <Link href="/blog" className="button">
            View Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
