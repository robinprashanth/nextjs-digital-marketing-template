"use client";

import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

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
    <div className="relative mt-4 mb-4">
      <div className="relative rounded-lg border border-neutral-700 bg-[#1c1c1c]">
        <div className="flex items-center justify-between bg-[#2D2D2D] px-4 py-2 rounded-t-lg">
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-[#FF605C]"></div>
              <div className="h-3 w-3 rounded-full bg-[#FFBD44]"></div>
              <div className="h-3 w-3 rounded-full bg-[#00CA4E]"></div>
            </div>
            {filename && <div className="text-sm text-neutral-400">{filename}</div>}
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
        <div className={`${className} overflow-x-auto p-4 bg-[#1E1E1E]`}>
          <code className="text-sm font-mono text-black">{children}</code>
        </div>
      </div>
    </div>
  );
}