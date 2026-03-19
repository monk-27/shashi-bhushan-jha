import PageBanner from "@/components/layout/PageBanner";
import { User, Calendar, MessageCircle, ChevronRight, Search, Quote } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const BLOG_POSTS = [
  {
    slug: "mastering-state-management-nextjs",
    title: "Mastering State Management in Next.js 14",
    excerpt: "Explore the different patterns for handling complex state in the App Router era, from built-in hooks to external libraries.",
    date: "Oct 24, 2025",
    category: "React / Next.js",
    readTime: "6 min read",
    tags: ["Next.js", "React", "State Management", "Performance"],
    content: `State management in Next.js 14 has fundamentally changed with the introduction of the App Router. React Server Components enable us to co-locate data fetching with rendering, dramatically reducing the need for global client-side state. However for interactive features requiring collaborative state or complex side-effects, external solutions like Zustand, Jotai, or React Query remain industry-standard choices.

The key principle guiding modern state architecture is "server state first" — defer to the server where possible via React Server Components and Server Actions, and only introduce client-side state for genuinely interactive, ephemeral UI needs. This approach minimizes JavaScript bundle size and maximizes performance by default.

For complex SaaS applications spanning dashboard-level interactions, Zustand paired with React Query provides a lightweight and highly composable state layer that scales remarkably well from prototype to production. The core advantage is predictable state transitions backed by explicit actions rather than implicit side-effects.`,
    quote: "Modern state management is not about choosing the right library, but choosing when NOT to use one.",
  },
  {
    slug: "why-flutter-dominates-mobile",
    title: "Why Flutter is Dominating Mobile Development in 2025",
    excerpt: "A deep dive into Flutter's rendering engine and how it enables seamless 60fps animations across all major platforms.",
    date: "Sep 12, 2025",
    category: "Flutter",
    readTime: "8 min read",
    tags: ["Flutter", "Mobile", "Cross-Platform", "Dart"],
    content: `Flutter 3.x has fundamentally cemented its position as the leading framework for cross-platform mobile development by solving the three historically painful dimensions of app development: performance, consistency, and developer productivity. The new Impeller rendering engine replaces the legacy Skia pipeline with a fully pre-compiled shader system that virtually eliminates jank during complex animations.

The single-codebase paradigm Flutter provides is not merely theoretical — in production environments, Flutter applications consistently achieve parity with native Swift and Kotlin code in benchmarks covering animation throughput, memory usage, and app startup latency. The business case is clear: ship features twice as fast with zero platform divergence.

For freelance developers and agencies, Flutter's widget system and declarative UI model make rapid prototyping and design iteration faster than any framework I've encountered. Combined with Dart's sound null-safety and async/await primitives, it enables production-grade mobile applications to be delivered at exceptional velocity.`,
    quote: "Flutter doesn't just cross platforms — it redefines what cross-platform means for end users.",
  },
  {
    slug: "scalable-nodejs-architecture",
    title: "Building Scalable Backend Architectures with Node.js",
    excerpt: "Learn how to structure your backend services to handle thousands of concurrent users without breaking a sweat.",
    date: "Aug 05, 2025",
    category: "Backend",
    readTime: "7 min read",
    tags: ["Node.js", "Backend", "Architecture", "Scalability"],
    content: `Node.js remains one of the most versatile platforms for server-side JavaScript, particularly for I/O-intensive applications like real-time APIs, streaming data pipelines, and microservices architectures. Its non-blocking event loop model enables it to handle massive concurrency with a small memory footprint compared to thread-per-request server models.

The cornerstone of scalable Node.js architecture is the separation of concerns at every level. Controllers should be thin and delegate to service layer classes that contain business logic. Repository patterns abstract data access entirely from business logic, enabling testability and future database migrations without touching application code.

Horizontal scaling with stateless services behind a load balancer using Redis for session and cache state is the gold standard for production Node.js deployments. Combined with PM2 clustering to utilize all available CPU cores and structured JSON logging for observability, you have the foundation of an enterprise-grade backend architecture.`,
    quote: "Scalability is not about handling 10x load — it's about being able to plan for it from day one.",
  },
];

export function generateStaticParams() {
  return BLOG_POSTS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((b) => b.slug === slug);
  return {
    title: post ? `${post.title} | Shashi Bhushan Jha` : "Blog",
    description: post?.excerpt ?? "",
  };
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((b) => b.slug === slug);
  if (!post) return notFound();

  const paragraphs = post.content.trim().split("\n\n");

  return (
    <>
      <PageBanner
        title={post.title}
        paths={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blogs" }, { name: "Article" }]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

            {/* ── Left 8-col Article Content ── */}
            <article className="lg:col-span-8 space-y-8">

              {/* Hero Image */}
              <div className="w-full aspect-video bg-gradient-to-tr from-[#164343] to-[#1ea173]/60 rounded-3xl overflow-hidden shadow-sm flex items-end relative">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
                <span className="absolute top-6 left-6 px-4 py-1.5 bg-[#1ea173] text-white text-sm font-bold rounded-full z-10">{post.category}</span>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-[#777] text-sm font-medium pb-6 border-b border-gray-100">
                <span className="flex items-center gap-2"><User size={16} className="text-[#1ea173]" /> Admin</span>
                <span className="flex items-center gap-2"><Calendar size={16} className="text-[#1ea173]" /> {post.date}</span>
                <span className="flex items-center gap-2"><MessageCircle size={16} className="text-[#1ea173]" /> Comment (03)</span>
                <span className="text-[#1ea173] font-bold">{post.readTime}</span>
              </div>

              <h1 className="text-3xl lg:text-[40px] font-extrabold text-[#111] leading-tight tracking-tight">{post.title}</h1>

              {paragraphs.slice(0, 2).map((para, i) => (
                <p key={i} className="text-[#555] text-[17px] leading-[1.9]">{para}</p>
              ))}

              {/* Blockquote */}
              <div className="my-10 px-8 lg:px-12 py-10 bg-[#e3f9f5] border-l-[12px] border-[#16a571] rounded-r-2xl flex gap-6 items-start">
                <div className="text-[#16a571] opacity-60 shrink-0">
                  <Quote size={48} className="scale-x-[-1]" fill="currentColor" />
                </div>
                <p className="text-[22px] font-medium leading-relaxed italic text-[#333] mt-1">
                  "{post.quote}"
                </p>
              </div>

              {paragraphs.slice(2).map((para, i) => (
                <p key={i} className="text-[#555] text-[17px] leading-[1.9]">{para}</p>
              ))}

              <h3 className="text-[28px] font-extrabold text-[#111] tracking-tight mb-4">Key Takeaways</h3>
              <ul className="space-y-4 mb-10">
                {["Apply server-state architecture wherever possible before reaching for client state libraries",
                  "Separate concerns strictly: controllers thin, services rich, repositories isolated",
                  "Measure first — optimize after knowing the actual bottlenecks",
                  "Choose tools that match team expertise and long-term maintenance costs",
                  "Write integration tests against real interfaces, not just unit tests against mocks"].map((point, i) => (
                  <li key={i} className="flex items-start gap-4 text-[#555] font-medium text-[17px]">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#16a571] shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Tags & Share */}
              <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-gray-100 gap-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-semibold text-[#111]">Tag:</span>
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-[#16a571] hover:underline cursor-pointer font-medium">#{tag.replace(/\s+/g, "")}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-[#111]">Share:</span>
                  {["f", "in", "tw", "ig"].map((s) => (
                    <span key={s} className="w-9 h-9 rounded-full bg-[#E3F9F5] flex items-center justify-center text-[#164343] hover:bg-[#16a571] hover:text-white cursor-pointer transition-colors text-sm font-bold">{s}</span>
                  ))}
                </div>
              </div>

              {/* Author Box */}
              <div className="bg-[#e3f9f5] border border-[#aee7dc] rounded-2xl p-8 lg:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 mt-12 mb-16">
                <img
                  src="https://ui-avatars.com/api/?name=Shashi+Bhushan&background=164343&color=fff&size=128"
                  alt="Shashi Bhushan Jha"
                  className="w-28 h-28 rounded-full shrink-0 shadow-xl object-cover"
                />
                <div>
                  <h4 className="text-[22px] font-extrabold text-[#111] mb-1">Shashi Bhushan Jha</h4>
                  <p className="text-[#1ea173] text-sm font-bold mb-4 uppercase tracking-wide">Software Developer</p>
                  <p className="text-[#555] font-medium text-[16px] leading-[1.8]">
                    Software Developer turning ideas into scalable products using Next.js, React, React Native, TypeScript, Node.js, and Flutter. Focused on building performant, user-centric solutions across web and mobile.
                  </p>
                </div>
              </div>

              {/* Comments */}
              <div className="pt-10 border-t border-gray-100">
                <h3 className="text-[28px] font-extrabold text-[#111] mb-10 tracking-tight">Comments (03)</h3>
                {[
                  { name: "Brooklyn Simmons", date: "28 April, 2023", text: "Excellent breakdown. The section on server-first state was exactly what I needed to reconfigure our architecture. Highly applicable." },
                  { name: "Marvin McKinney", date: "20 October, 2023", text: "Very in-depth and well-organized. Loved the emphasis on separating concerns — this is often overlooked by less experienced teams." },
                  { name: "Ronald Richards", date: "06 June, 2023", text: "The horizontal scaling section is gold. We implemented Redis-backed sessions based on this post and saw measurable improvements immediately." },
                ].map((c, i) => (
                  <div key={i} className="flex gap-6 pb-8 border-b border-gray-100 mb-8 last:border-0 last:mb-0">
                    <img src={`https://ui-avatars.com/api/?name=${c.name.replace(" ", "+")}&background=f3f4f6&color=164343&size=80`} alt={c.name} className="w-16 h-16 rounded-full shrink-0 object-cover" />
                    <div className="w-full">
                      <div className="flex items-start justify-between mb-3 gap-4">
                        <div>
                          <h5 className="text-[19px] font-bold text-[#111]">{c.name}</h5>
                          <p className="text-[#1ea173] text-sm font-medium flex items-center gap-2 mt-1"><Calendar size={13} /> {c.date}</p>
                        </div>
                        <button className="shrink-0 px-4 py-2 rounded-full bg-[#E3F9F5] hover:bg-[#16a571] text-[#111] hover:text-white transition-colors text-[13px] font-bold">
                          REPLY ↩
                        </button>
                      </div>
                      <p className="text-[#555] leading-[1.8] text-[16px]">{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comment Form */}
              <div className="mt-10 p-10 lg:p-12 border border-gray-100 bg-white shadow-xl shadow-gray-100/50 rounded-2xl">
                <h3 className="text-[28px] font-extrabold text-[#111] mb-2 tracking-tight">Add Your Comment</h3>
                <p className="text-[#555] font-medium text-[16px] mb-8">Share your thoughts on this article</p>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" placeholder="Enter Name" className="w-full px-6 py-4 rounded-xl border border-gray-200 outline-none focus:border-[#16a571] text-[#555] text-[16px] transition-colors" />
                    <input type="email" placeholder="Enter Email" className="w-full px-6 py-4 rounded-xl border border-gray-200 outline-none focus:border-[#16a571] text-[#555] text-[16px] transition-colors" />
                  </div>
                  <textarea placeholder="Enter Message..." rows={6} className="w-full px-6 py-4 rounded-xl border border-gray-200 outline-none focus:border-[#16a571] text-[#555] text-[16px] transition-colors resize-y" />
                  <button type="submit" className="px-10 py-4 bg-[#16a571] text-white font-bold rounded-[8px] hover:bg-[#0c3b31] transition-colors shadow-lg text-[16px]">
                    Submit Now
                  </button>
                </form>
              </div>
            </article>

            {/* ── Right 4-col Sidebar ── */}
            <aside className="lg:col-span-4 space-y-10">
              {/* Search */}
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <h4 className="text-[22px] font-bold text-[#111] mb-6 pb-4 border-b border-gray-100">Search</h4>
                <div className="relative">
                  <input type="text" placeholder="Search here..." className="w-full pl-5 pr-14 py-4 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-[#16a571] text-[#555] text-sm" />
                  <button className="absolute right-2 top-2 bottom-2 w-10 bg-[#0c3b31] rounded-lg flex items-center justify-center text-white hover:bg-[#16a571] transition-colors">
                    <Search size={17} />
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <h4 className="text-[22px] font-bold text-[#111] mb-6 pb-4 border-b border-gray-100">Categories</h4>
                <ul>
                  {["React / Next.js", "Flutter & Dart", "Backend / Node.js", "TypeScript", "Career & Freelancing", "System Design"].map((cat, i) => (
                    <li key={i} className="border-b border-gray-100 last:border-0">
                      <a href="#" className="flex items-center justify-between py-4 text-[#555] font-medium text-[16px] hover:text-[#16a571] group pl-0 hover:pl-2 transition-all">
                        {cat}<ChevronRight size={18} className="text-[#16a571] opacity-60 group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <h4 className="text-[22px] font-bold text-[#111] mb-6 pb-4 border-b border-gray-100">Recent Posts</h4>
                <div className="space-y-6">
                  {BLOG_POSTS.filter((b) => b.slug !== post.slug).slice(0, 3).map((rp) => (
                    <Link key={rp.slug} href={`/blogs/${rp.slug}`} className="flex items-center gap-4 group pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className="w-20 h-20 shrink-0 bg-[#e3f9f5] rounded-xl flex items-center justify-center text-[#1ea173] text-2xl font-extrabold group-hover:bg-[#1ea173] group-hover:text-white transition-colors">
                        {rp.category.charAt(0)}
                      </div>
                      <div>
                        <p className="text-[13px] font-bold text-[#16a571] mb-1 flex items-center gap-1"><Calendar size={12} /> {rp.date}</p>
                        <h5 className="text-[15px] font-extrabold text-[#111] leading-[1.4] group-hover:text-[#16a571] transition-colors line-clamp-2">{rp.title}</h5>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <h4 className="text-[22px] font-bold text-[#111] mb-6 pb-4 border-b border-gray-100">Tags</h4>
                <div className="flex flex-wrap gap-3">
                  {["Next.js", "Flutter", "Node.js", "TypeScript", "React", "Architecture", "Mobile"].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-[#f4f8f7] text-[#111] text-[14px] font-medium rounded hover:bg-[#16a571] hover:text-white transition-colors cursor-pointer">{tag}</span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
