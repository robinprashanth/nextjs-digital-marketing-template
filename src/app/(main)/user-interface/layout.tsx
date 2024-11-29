"use client";

import { FC, ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Square,
  Play,
  Component,
  Palette,
  MessageSquare
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface LayoutProps {
  children: ReactNode;
}

const navigation = [
  {
    name: "Buttons",
    href: "/user-interface/buttons",
    icon: Square,
  },
  {
    name: "Cards",
    href: "/user-interface/cards",
    icon: Square,
  },
  {
    name: "Animations",
    href: "/user-interface/animations",
    icon: Play,
  },
  {
    name: "Dialogs",
    href: "/user-interface/dialogs",
    icon: MessageSquare,
  },
  {
    name: "Components",
    href: "/user-interface/components",
    icon: Component,
  },
  {
    name: "Colors",
    href: "/user-interface/colors",
    icon: Palette,
  },
  {
    name: "CTAs",
    href: "/user-interface/cta",
    icon: MessageSquare,
  }
];

const UILayout: FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const currentPath = pathname.split("/").pop() || "";

  return (
    <div className="min-h-[calc(100vh-128px)] bg-background">
      {/* Header */}
      <div className="sticky top-[64px] z-30 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="py-4">
            <h1 className="mb-4 text-2xl font-bold">UI Components</h1>
            
            {/* Desktop Tabs */}
            <div className="hidden sm:block">
              <Tabs
                defaultValue={currentPath || "buttons"}
                onValueChange={(value) => router.push(`/user-interface/${value}`)}
              >
                <TabsList className="h-auto flex-wrap gap-2 bg-transparent p-0 overflow-x-auto">
                  {navigation.map((item) => (
                    <TabsTrigger
                      key={item.name}
                      value={item.href.split("/").pop() || ""}
                      className="data-[state=active]:bg-theme-primary-500 data-[state=active]:text-white"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* Mobile Tabs - Scrollable */}
            <div className="hide-scrollbar overflow-x-auto sm:hidden">
              <Tabs
                defaultValue={currentPath || "buttons"}
                onValueChange={(value) => router.push(`/user-interface/${value}`)}
              >
                <TabsList className="inline-flex h-auto gap-2 bg-transparent p-0">
                  {navigation.map((item) => (
                    <TabsTrigger
                      key={item.name}
                      value={item.href.split("/").pop() || ""}
                      className="flex-shrink-0 data-[state=active]:bg-theme-primary-500 data-[state=active]:text-white"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8 sm:px-6">
        {children}
      </main>

      {/* Scrollbar hiding styles */}
      <style jsx global>{`
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default UILayout;