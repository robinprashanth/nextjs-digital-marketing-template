import { getAllBlogPosts } from "@/lib/blog";
import { Blogs } from "./_components/Blog";

export default async function BlogPageWrapper() {
  const posts = await getAllBlogPosts();
  return <Blogs initialPosts={posts} />;
}
