"use client";

import { ScrollInView } from "@/components/motion/ScrollInView";
import { Button } from "@/components/ui/button";
import { useDebounce } from "@/hooks/useDebounce";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ITEMS_PER_PAGE } from "@/lib/constants";
import type { BlogPost } from "@/types";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { BlogCard } from "./BlogCard";
import { BlogLoadingSpinner } from "./BlogLoadingSpinner";
import { BlogNoResults } from "./BlogNoResults";

// Define the search handler type
type SearchHandler = (value: string) => void;

interface BlogsProps {
  initialPosts: BlogPost[];
}

const CategoryScrollButtons: FC<{
  containerRef: React.RefObject<HTMLDivElement>;
}> = ({ containerRef }) => {
  const [showButtons, setShowButtons] = useState({
    left: false,
    right: false,
  });

  const updateScrollButtons = useCallback(() => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowButtons({
        left: scrollLeft > 0,
        right: scrollLeft < scrollWidth - clientWidth - 10,
      });
    }
  }, []);

  const debouncedUpdateScroll = useDebounce(updateScrollButtons, 100);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      updateScrollButtons();
      container.addEventListener("scroll", debouncedUpdateScroll);
      window.addEventListener("resize", debouncedUpdateScroll);

      return () => {
        container.removeEventListener("scroll", debouncedUpdateScroll);
        window.removeEventListener("resize", debouncedUpdateScroll);
      };
    }
  }, [debouncedUpdateScroll, updateScrollButtons]);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (!showButtons.left && !showButtons.right) return null;

  return (
    <>
      {showButtons.left && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute -left-4 top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full bg-background/80 text-foreground shadow-md backdrop-blur-sm hover:bg-background md:-left-6"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      )}
      {showButtons.right && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-4 top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full bg-background/80 text-foreground shadow-md backdrop-blur-sm hover:bg-background md:-right-6"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      )}
    </>
  );
};

export const Blogs: FC<BlogsProps> = ({ initialPosts }) => {
  const [displayedItems, setDisplayedItems] = useState<BlogPost[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const categoriesRef = useRef<HTMLDivElement>(null);

  const categories = [
    "All",
    ...Array.from(new Set(initialPosts.map((post) => post.category))),
  ];

  const filterPosts = useCallback(() => {
    const filtered = initialPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        );

      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;

      return matchesSearch && matchesCategory;
    });

    setDisplayedItems(filtered.slice(0, page * ITEMS_PER_PAGE));
    setHasMore(filtered.length > page * ITEMS_PER_PAGE);
  }, [initialPosts, searchQuery, activeCategory, page]);

  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;
    setLoading(true);
    setTimeout(() => {
      setPage((prev) => prev + 1);
      setLoading(false);
    }, 500);
  }, [loading, hasMore]);

  // Create a properly typed search handler
  const handleSearch: SearchHandler = useCallback((value: string) => {
    setSearchQuery(value);
    setPage(1);
  }, []);

  // Now TypeScript knows this is specifically a debounced string handler
  const debouncedSearch = useDebounce<SearchHandler>(handleSearch, 300);

  const loadingRef = useIntersectionObserver({
    onIntersect: loadMore,
    enabled: hasMore && !loading,
    threshold: 0.8,
  });

  useEffect(() => {
    filterPosts();
  }, [filterPosts]);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[linear-gradient(45deg,#8A6FF9,#6B4FD9)]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.4))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container relative mx-auto px-4 py-16 sm:px-6 sm:py-20 md:py-24">
          <ScrollInView className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
              BLOG
            </span>
            <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Insights & Updates
            </h1>
            <p className="text-base text-white/80 sm:text-lg">
              Explore our latest thoughts, strategies, and insights about
              digital marketing.
            </p>
          </ScrollInView>
        </div>

        {/* Wave Divider */}
        <div className="relative">
          <svg
            viewBox="0 0 1440 200"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-background"
          >
            <path d="M0 120l48 13.3c48 13.4 144 40 240 40s192-26.6 288-40c96-13.3 192-13.3 288 0s192 40 288 40 192-26.7 240-40l48-13.3v80H0z" />
          </svg>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="relative -mt-20 pb-8 sm:pb-12">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollInView className="rounded-2xl border border-border bg-card p-4 sm:p-6 md:p-8">
            <div className="flex flex-col gap-4 md:gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search posts..."
                  defaultValue={searchQuery}
                  onChange={(e) => debouncedSearch(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <div
                  ref={categoriesRef}
                  className="scrollbar-none flex gap-2 overflow-x-auto px-2 pb-2 sm:gap-4"
                >
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setActiveCategory(category);
                        setPage(1);
                      }}
                      className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                        activeCategory === category
                          ? "bg-primary text-primary-foreground"
                          : "bg-background text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                <CategoryScrollButtons containerRef={categoriesRef} />
              </div>
            </div>
          </ScrollInView>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-16 sm:pb-20 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          {displayedItems.length > 0 ? (
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {displayedItems.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="mt-12">
              <BlogNoResults />
            </div>
          )}

          {/* Loading and Load More */}
          <div ref={loadingRef} className="mt-8">
            {loading && <BlogLoadingSpinner />}
            {!hasMore && displayedItems.length > 0 && (
              <div className="mt-12 text-center text-muted-foreground">
                No more posts to load
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section - Optional */}
      <section className="bg-muted py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollInView className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              STAY UPDATED
            </span>
            <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
              Subscribe to Our Newsletter
            </h2>
            <p className="mb-8 text-muted-foreground">
              Get the latest insights and updates delivered straight to your
              inbox.
            </p>
            <form
              className="flex flex-col gap-4 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Button className="whitespace-nowrap">Subscribe Now</Button>
            </form>
          </ScrollInView>
        </div>
      </section>
    </main>
  );
};
