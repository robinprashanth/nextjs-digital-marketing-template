import { Metadata } from "next";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Clock,
  Heart,
  Share2,
  Star,
  MessageSquare,
  MoreVertical,
} from "lucide-react";
import { Industries } from "./_components/Industries";

export const metadata: Metadata = {
  title: "Cards - UI Components",
  description: "Various card component examples and usage patterns",
};

export default function CardsPage() {
  return (
    <div className="container relative mx-auto px-4 py-24 sm:px-6">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Card Components
          </h1>
          <p className="mx-auto max-w-[700px] text-theme-neutral-500 dark:text-theme-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A collection of card components for various use cases and layouts.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-5xl py-12">
        {/* Industry Cards */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Industry Cards</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Industries />
          </div>
          <div className="mt-4 rounded-lg bg-theme-slate-950 p-4">
            <pre className="text-sm text-theme-neutral-100">
              {`// Industry Card Component
export const IndustryCard: FC<IndustryCardProps> = ({
  industry,
  isActive,
  onClick,
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
  >
    <Card
      className={\`cursor-pointer transition-all duration-300 hover:shadow-lg \${
        isActive ? "ring-2 ring-theme-primary-500" : ""
      }\`}
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/30">
            {industry.icon}
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-5 w-5 fill-theme-sunflower-400 text-theme-sunflower-400" />
            <span className="font-medium text-theme-neutral-900 dark:text-white">
              {industry.expertise}%
            </span>
          </div>
        </div>
        <CardTitle className="text-xl">{industry.name}</CardTitle>
        <CardDescription>{industry.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-sm">
          <span className="text-theme-neutral-600 dark:text-theme-neutral-400">
            Expertise Level
          </span>
          <span className="text-theme-primary-600">{industry.expertise}%</span>
        </div>
        <Progress value={industry.expertise} className="mt-2" />
      </CardContent>
    </Card>
  </motion.div>
);

// Usage Example
const sampleIndustries: Industry[] = [
  {
    id: 1,
    name: "Technology",
    description: "Software development and IT solutions",
    icon: <Code2 className="h-6 w-6 text-theme-primary-600" />,
    expertise: 95,
    // ... other properties
  },
  // ... more industries
];

// In your component
const [activeIndustry, setActiveIndustry] = useState<number>(1);

{sampleIndustries.map((industry, index) => (
  <IndustryCard
    key={industry.id}
    industry={industry}
    isActive={activeIndustry === industry.id}
    onClick={() => setActiveIndustry(industry.id)}
    delay={index * 0.1}
  />
))}`}
            </pre>
          </div>
        </section>
        {/* Blog Post Cards */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Blog Post Cards</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/industries/ecommerce.jpg"
                  alt="Blog post cover"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHSIeIRohHh4iIR4eISEiHiIhIiIiIh4iIiIiIiIiIiIiIiIiIiIiIiIiIiL/2wBDAR..." // Add actual blur data URL
                />
              </div>
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <Badge variant="secondary">Tutorial</Badge>
                  <span className="text-sm text-muted-foreground">
                    5 min read
                  </span>
                </div>
                <CardTitle>Getting Started with Web Development</CardTitle>
                <CardDescription>
                  Learn the fundamentals of web development and build your first
                  website.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src="/images/avatars/author-1.jpg"
                      alt="Author"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-sm text-muted-foreground">
                      Dec 20, 2023
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Latest Blog Posts</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src="/images/industries/ecommerce.jpg"
                        alt={`Blog post thumbnail ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium leading-none">
                        Blog Post Title {i}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Short excerpt from the blog post...
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        <span className="text-xs text-muted-foreground">
                          3 min read
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Product Cards */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Product Cards</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <Card className="group relative">
              <div className="absolute right-4 top-4 z-10">
                <Button size="icon" variant="ghost" className="rounded-full">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/services/email-marketing-dashboard.jpg"
                  alt="Product image"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle>Product Name</CardTitle>
                <CardDescription>Product description goes here</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold">$99.99</p>
                    <div className="mt-1 flex items-center gap-1">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-current text-theme-sunflower-400"
                          />
                        ))}
                    </div>
                  </div>
                  <Button>Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Social Cards */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Social Cards</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src="/assets/profile1.jpg"
                        alt="User avatar"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">User Name</p>
                      <p className="text-sm text-muted-foreground">@username</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  This is a social media post content. It can include text,
                  images, or other media.
                </p>
                <div className="relative mt-4 h-48 w-full">
                  <Image
                    src="/images/industries/ecommerce.jpg"
                    alt="Social post image"
                    fill
                    className="rounded-lg object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <div className="flex gap-4">
                  <Button variant="ghost" size="sm">
                    <Heart className="mr-2 h-4 w-4" />
                    123
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    45
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="mr-2 h-4 w-4" />
                    12
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Usage with Next.js Image</h2>
          <div className="rounded-lg bg-theme-slate-950 p-4">
            <pre className="text-sm text-theme-neutral-100">
              {`// Card with Next.js Image
<Card className="overflow-hidden">
  <div className="relative h-48 w-full">
    <Image 
      src="/images/blog/post-1.jpg" 
      alt="Blog post cover"
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 
             (max-width: 1200px) 50vw, 
             33vw"
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
    />
  </div>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content here...
  </CardContent>
</Card>`}
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}
