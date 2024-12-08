"use client";

import { ScrollInView } from "@/components/motion/ScrollInView";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FC } from "react";

const ComponentShowcase: FC = () => {
  return (
    <div className="space-y-16">
      {/* Badge Section */}
      <section className="space-y-6">
        <ScrollInView>
          <h2 className="text-2xl font-bold">Badges</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
            <div className="flex flex-wrap gap-4">
              <Badge variant="new">New</Badge>
              <Badge variant="soon">Coming Soon</Badge>
              <Badge variant="beta">Beta</Badge>
              <Badge variant="hiring">Hiring</Badge>
            </div>
            <div className="flex flex-wrap gap-4">
              <Badge variant="active">Active</Badge>
              <Badge variant="pending">Pending</Badge>
              <Badge variant="closed">Closed</Badge>
            </div>
            <div className="flex flex-wrap gap-4">
              <Badge variant="success">Success</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="info">Info</Badge>
            </div>
          </div>
          <div className="mt-4 rounded-lg border border-border p-4">
            <pre className="text-sm">
              <code>{`<Badge variant="default">Default</Badge>
<Badge variant="new">New</Badge>
<Badge variant="active">Active</Badge>
<Badge variant="success">Success</Badge>`}</code>
            </pre>
          </div>
        </ScrollInView>
      </section>

      {/* Tooltip Section */}
      <section className="space-y-6">
        <ScrollInView>
          <h2 className="text-2xl font-bold">Tooltips</h2>
          <div className="flex flex-wrap gap-8">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="rounded-lg border border-border px-4 py-2">
                  Hover me
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tooltip content</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="rounded-lg border border-border px-4 py-2">
                  Top tooltip
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>Tooltip on top</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="mt-4 rounded-lg border border-border p-4">
            <pre className="text-sm">
              <code>{`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover me</TooltipTrigger>
    <TooltipContent>
      <p>Tooltip content</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}</code>
            </pre>
          </div>
        </ScrollInView>
      </section>

      {/* Progress Section */}
      <section className="space-y-6">
        <ScrollInView>
          <h2 className="text-2xl font-bold">Progress</h2>
          <div className="space-y-4">
            <Progress value={33} className="w-full" />
            <Progress value={66} className="w-full" />
            <Progress value={100} className="w-full" />
          </div>
          <div className="mt-4 rounded-lg border border-border p-4">
            <pre className="text-sm">
              <code>{`<Progress value={33} className="w-full" />
<Progress value={66} className="w-full" />
<Progress value={100} className="w-full" />`}</code>
            </pre>
          </div>
        </ScrollInView>
      </section>

      {/* Breadcrumbs Section */}
      <section className="space-y-6">
        <ScrollInView>
          <h2 className="text-2xl font-bold">Breadcrumbs</h2>
          <div className="space-y-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="mt-4 rounded-lg border border-border p-4">
            <pre className="text-sm">
              <code>{`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}</code>
            </pre>
          </div>
        </ScrollInView>
      </section>

      {/* Avatar Section */}
      <section className="space-y-6">
        <ScrollInView>
          <h2 className="text-2xl font-bold">Avatars</h2>
          <div className="flex flex-wrap gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="/broken-image.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>LG</AvatarFallback>
            </Avatar>
          </div>
          <div className="mt-4 rounded-lg border border-border p-4">
            <pre className="text-sm">
              <code>{`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

<Avatar className="h-16 w-16">
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>LG</AvatarFallback>
</Avatar>`}</code>
            </pre>
          </div>
        </ScrollInView>
      </section>
    </div>
  );
};

export default ComponentShowcase;
