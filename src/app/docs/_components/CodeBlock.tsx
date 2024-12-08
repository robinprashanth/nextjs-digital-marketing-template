"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
  children: string;
  className?: string;
  filename?: string;
}

export function CodeBlock({ children, className, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mb-4 mt-4">
      <div className="relative rounded-lg border border-neutral-700 bg-[#1c1c1c]">
        <div className="flex items-center justify-between rounded-t-lg bg-[#2D2D2D] px-4 py-2">
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-[#FF605C]"></div>
              <div className="h-3 w-3 rounded-full bg-[#FFBD44]"></div>
              <div className="h-3 w-3 rounded-full bg-[#00CA4E]"></div>
            </div>
            {filename && (
              <div className="text-sm text-neutral-400">{filename}</div>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 hover:bg-neutral-700/50"
            onClick={onCopy}
          >
            {copied ? (
              <Check className="h-3 w-3 text-green-500" />
            ) : (
              <Copy className="h-3 w-3 text-neutral-400" />
            )}
          </Button>
        </div>
        <div className={`${className} overflow-x-auto bg-[#1E1E1E] p-4`}>
          <code className="font-mono text-sm text-black">{children}</code>
        </div>
      </div>
    </div>
  );
}
