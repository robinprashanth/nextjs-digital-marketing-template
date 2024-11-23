import { getAllArticles } from "@/lib/mdx";
import { KnowledgeBase } from "./_components/KnowledgeBase";

export default async function KnowledgeBasePage() {
  const articles = await getAllArticles();
  return <KnowledgeBase articles={articles} />;
}
