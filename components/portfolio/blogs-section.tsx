import { CalendarIcon } from "@/components/portfolio/icons";
import type { BlogItem } from "@/types/portfolio";

function BlogCard({ blog }: { blog: BlogItem }) {
  return (
    <a href={blog.href} target="_blank" rel="noopener noreferrer" className="group block h-full">
      <div className="flex h-full flex-col rounded-md border border-dashed border-black/20 bg-black/5 p-4 transition-all dark:border-white/10 dark:bg-white/5">
        <h3 className="text-lg font-semibold text-foreground [font-family:var(--profile-heading-font)] group-hover:text-primary group-hover:underline">
          {blog.title}
        </h3>
        <p className="text-sleek-secondary mt-1 text-sm">{blog.description}</p>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {blog.tags.map((tag) => (
            <span key={tag} className="tag-inner-shadow rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-0.5 text-xs text-foreground dark:border-white/30 dark:bg-white/15">
              {tag}
            </span>
          ))}
          <span className="text-sleek-secondary flex items-center gap-1 text-xs">
            <CalendarIcon className="h-3 w-3" />
            {blog.date}
          </span>
        </div>
      </div>
    </a>
  );
}

export function BlogsSection({ blogs }: { blogs: BlogItem[] }) {
  return (
    <section id="blogs" className="mt-20">
      <h2 className="text-2xl font-semibold text-foreground [font-family:var(--profile-heading-font)]">Blogs</h2>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {blogs.map((blog) => (
          <BlogCard key={blog.title} blog={blog} />
        ))}
      </div>
    </section>
  );
}
