import { FC } from "react";

export const BlogLoadingSpinner: FC = () => (
  <div className="flex items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-r-transparent" />
  </div>
);
