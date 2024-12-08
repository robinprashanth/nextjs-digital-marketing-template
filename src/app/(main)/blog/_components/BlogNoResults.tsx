import { ScrollInView } from "@/components/motion/ScrollInView";
import { Search } from "lucide-react";
import { FC } from "react";

export const BlogNoResults: FC = () => (
  <ScrollInView className="text-center">
    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted">
      <Search className="h-10 w-10 text-muted-foreground" />
    </div>
    <h3 className="mt-4 text-lg font-semibold text-foreground">
      No posts found
    </h3>
    <p className="mt-2 text-muted-foreground">
      Try adjusting your search or filter to find what you&apos;re looking for.
    </p>
  </ScrollInView>
);
