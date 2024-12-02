"use client"

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
      {filename && (
        <div className="flex items-center justify-between rounded-t-lg border bg-muted px-4 py-2">
          <div className="text-sm text-muted-foreground">{filename}</div>
        </div>
      )}
      <div className="relative">
        <pre className={`${className} rounded-lg bg-black p-4 overflow-x-auto`}>
          <code className="text-sm text-white">{children}</code>
        </pre>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 hover:bg-white/10"
          onClick={onCopy}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4 text-white" />
          )}
        </Button>
      </div>
    </div>
  );
}