"use client";

import { FC } from "react";
import { ScrollInView } from "@/components/motion/ScrollInView";
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
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BarChart3,
  DollarSign,
  ArrowUpRight,
  Calendar,
  Star,
  Clock,
  CreditCard,
  Sparkles,
  ShieldCheck,
  Lock,
  CheckCircle2,
  Zap,
  MessageSquare,
  Bell,
} from "lucide-react";
import Image from "next/image";
import { Industries } from "./_components/Industries";

const CardsShowcase: FC = () => {
  return (
    <div className="container relative mx-auto px-4 py-24 sm:px-6">
      {/* Page Header */}
      <ScrollInView>
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold">Cards</h1>
          <p className="text-lg text-muted-foreground">
            A collection of beautiful and futuristic card components for various use cases.
          </p>
        </div>
      </ScrollInView>

      {/* Financial Cards */}
      <section className="space-y-6">
        <ScrollInView>
          <h2 className="mb-6 text-2xl font-semibold">Financial Cards</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Balance Card */}
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-theme-primary-500/10 via-transparent to-theme-ocean-500/10" />
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Total Balance</span>
                  <DollarSign className="h-5 w-5 text-theme-primary-500" />
                </CardTitle>
                <CardDescription>Your current balance across all accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 text-3xl font-bold">$24,685.00</div>
                <div className="flex items-center gap-2 text-sm text-theme-tulip-500">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>+2.5% from last month</span>
                </div>
              </CardContent>
              <CardFooter className="justify-between border-t border-border/50 bg-card/50">
                <div className="text-sm text-muted-foreground">Updated 2 mins ago</div>
                <Button variant="ghost" size="sm">View Details</Button>
              </CardFooter>
            </Card>

            {/* Transaction Card */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-theme-primary-600 to-theme-ocean-600">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat hover:animate-градиент" />
              <CardHeader>
                <div className="flex justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-white">Virtual Card</CardTitle>
                    <CardDescription className="text-white/60">
                      **** **** **** 4589
                    </CardDescription>
                  </div>
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="mt-4 flex items-center justify-between text-white">
                  <div>
                    <p className="text-sm opacity-60">Balance</p>
                    <p className="text-2xl font-semibold">$12,589</p>
                  </div>
                  <div>
                    <p className="text-sm opacity-60">Expires</p>
                    <p className="text-lg">05/25</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Analytics Card */}
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-theme-primary-500/5 via-transparent to-theme-ocean-500/5" />
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Performance</span>
                  <BarChart3 className="h-5 w-5 text-theme-primary-500" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Success Rate</span>
                    <span className="font-semibold">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Revenue</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold">$12.5k</span>
                      <span className="flex items-center text-xs text-theme-tulip-500">
                        <ArrowUpRight className="h-3 w-3" /> +15%
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Profit</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold">$4.2k</span>
                      <span className="flex items-center text-xs text-theme-tulip-500">
                        <ArrowUpRight className="h-3 w-3" /> +8%
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollInView>
      </section>
      <section className="space-y-6">
        <Industries />
        
      </section>

      {/* Profile Cards */}
      <section className="space-y-6">
        <ScrollInView>
          <h2 className="mb-6 text-2xl font-semibold">Profile Cards</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Team Member Card */}
            <Card className="relative overflow-hidden transition-all hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-b from-theme-primary-500/5 to-transparent" />
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>John Doe</CardTitle>
                    <CardDescription>Senior Developer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between border-t border-border/50 py-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">25</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">1.2k</div>
                    <div className="text-xs text-muted-foreground">Commits</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-xs text-muted-foreground">Success</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View Profile</Button>
              </CardFooter>
            </Card>

            {/* Achievement Card */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-theme-primary-500 to-theme-ocean-600 text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]" />
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white/10 p-2">
                    <Star className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle>Elite Status</CardTitle>
                    <CardDescription className="text-white/60">Level 5 Achiever</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mt-4 space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress to Next Level</span>
                      <span>78%</span>
                    </div>
                    <Progress value={78} className="h-2 bg-white/20" />
                  </div>
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="text-white/60">Achievements</p>
                      <p className="text-lg font-semibold">28/30</p>
                    </div>
                    <div>
                      <p className="text-white/60">Points</p>
                      <p className="text-lg font-semibold">4,892</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full">View Achievements</Button>
              </CardFooter>
            </Card>

            {/* Status Card */}
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-theme-primary-500/10 via-transparent to-theme-ocean-500/10" />
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>System Status</CardTitle>
                  <Badge variant="success">Online</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-theme-tulip-500" />
                      <span>Security</span>
                    </div>
                    <Badge variant="outline">Protected</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Lock className="h-5 w-5 text-theme-ocean-500" />
                      <span>SSL</span>
                    </div>
                    <Badge variant="outline">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-theme-sunflower-500" />
                      <span>Performance</span>
                    </div>
                    <Badge variant="outline">Optimal</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-border/50">
                <Button variant="ghost" className="w-full">View Details</Button>
              </CardFooter>
            </Card>
          </div>
        </ScrollInView>
      </section>

      {/* Feature Cards */}
      <section className="space-y-6">
        <ScrollInView>
          <h2 className="mb-6 text-2xl font-semibold">Feature Cards</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Pricing Card */}
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-theme-primary-500/5 via-transparent to-theme-ocean-500/5" />
              <CardHeader>
                <CardTitle>Pro Plan</CardTitle>
                <CardDescription>Perfect for growing businesses</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {['Unlimited Projects', 'Priority Support', 'Custom Domain', 'Analytics'].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-theme-tulip-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>

            {/* Event Card */}
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-theme-primary-500/10 via-transparent to-theme-ocean-500/10" />
              <div className="absolute right-4 top-4">
                <Badge variant="secondary">Upcoming</Badge>
              </div>
              <CardHeader>
                <div className="space-y-2">
                  <CardTitle>Tech Conference 2024</CardTitle>
                  <CardDescription>Join us for the biggest tech event of the year</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-theme-primary-500" />
                    <span>March 15-17, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-theme-primary-500" />
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <Avatar key={i}>
                      <AvatarImage src={`https://avatar.vercel.sh/${i}`} />
                      <AvatarFallback>U{i}</AvatarFallback>
                    </Avatar>
                  ))}
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted text-sm">
                    +12
                  </div>
                </div>
                </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Register Now</Button>
            </CardFooter>
          </Card>
          </div>

          {/* Product Card */}
          <Card className="group relative overflow-hidden mt-10">
            <div className="absolute inset-0 bg-gradient-to-br from-theme-primary-500/5 via-transparent to-theme-ocean-500/5" />
            <CardHeader>
              <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <div className="relative h-full w-full">
        <Image
          src="/images/portfolio/healthcare.jpg"
          alt="Product"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority={false}
          quality={90}
        />
      </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <CardTitle>Pro Headphones</CardTitle>
                  <Badge variant="secondary">New</Badge>
                </div>
                <CardDescription>
                  Premium wireless headphones with noise cancellation
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">$299</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current text-yellow-400" />
                    <span className="text-sm">4.9 (120)</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="grid grid-cols-2 gap-4">
              <Button variant="outline">Add to Cart</Button>
              <Button>Buy Now</Button>
            </CardFooter>
          </Card>
      </ScrollInView>
    </section>

    {/* Dashboard Cards */}
    <section className="space-y-6">
      <ScrollInView>
        <h2 className="mb-6 text-2xl font-semibold">Dashboard Cards</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Task Card */}
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-theme-primary-500/5 via-transparent to-theme-ocean-500/5" />
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Active Tasks</span>
                <Badge>5 Tasks</Badge>
              </CardTitle>
              <CardDescription>Your current task overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <div>
                    <div className="font-medium">Design System</div>
                    <div className="text-sm text-muted-foreground">Due in 3 days</div>
                  </div>
                  <Progress value={75} className="w-20" />
                </div>
                <div className="flex justify-between">
                  <div>
                    <div className="font-medium">User Research</div>
                    <div className="text-sm text-muted-foreground">Due tomorrow</div>
                  </div>
                  <Progress value={45} className="w-20" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-between border-t border-border/50">
              <Button variant="ghost" size="sm">View All</Button>
              <Button variant="ghost" size="sm">Add Task</Button>
            </CardFooter>
          </Card>

          {/* Notification Card */}
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-theme-rose-500/5 via-transparent to-theme-primary-500/5" />
            <CardHeader>
              <CardTitle>Recent Notifications</CardTitle>
              <CardDescription>Latest updates and activities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { title: "New comment on your post", time: "2m ago", icon: MessageSquare },
                { title: "Your project was approved", time: "1h ago", icon: CheckCircle2 },
                { title: "Server update completed", time: "2h ago", icon: Sparkles },
              ].map((notification, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="rounded-full bg-muted p-2">
                    <notification.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{notification.title}</div>
                    <div className="text-xs text-muted-foreground">{notification.time}</div>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full">
                View All Notifications
              </Button>
            </CardFooter>
          </Card>

          {/* Settings Card */}
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-theme-ocean-500/5 via-transparent to-theme-primary-500/5" />
            <CardHeader>
              <CardTitle>Quick Settings</CardTitle>
              <CardDescription>Manage your preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-theme-tulip-500" />
                  <span>Two-Factor Auth</span>
                </div>
                <Badge>Enabled</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-theme-ocean-500" />
                  <span>Notifications</span>
                </div>
                <Badge variant="outline">Configured</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-theme-rose-500" />
                  <span>Privacy Mode</span>
                </div>
                <Badge variant="secondary">Active</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Manage Settings
              </Button>
            </CardFooter>
          </Card>
        </div>
      </ScrollInView>
    </section>

    {/* Usage Examples */}
    <section className="space-y-4">
      <ScrollInView>
        <h2 className="text-2xl font-semibold">Implementation</h2>
        <Card>
          <CardContent className="pt-6">
            <pre className="text-sm">
              <code>{`import {
Card,
CardContent,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
} from "@/components/ui/card"

// Basic Card
<Card>
<CardHeader>
  <CardTitle>Title</CardTitle>
  <CardDescription>Description</CardDescription>
</CardHeader>
<CardContent>Content</CardContent>
<CardFooter>Footer</CardFooter>
</Card>

// With Gradient Background
<Card className="relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-theme-primary-500/10 to-theme-ocean-500/10" />
{/* Card content */}
</Card>`}</code>
            </pre>
          </CardContent>
        </Card>
      </ScrollInView>
    </section>
  </div>
);
};

export default CardsShowcase;