import { Testimonial } from "@/types";
import { FC } from "react";
import { Card, CardContent } from "../ui/card";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

export const TestimonialCard: FC<Testimonial & { index: number }> = ({
    author,
    role,
    company,
    image,
    content
  }) => (
    <Card className="relative hover:shadow-md">
      <CardContent className="relative p-6">
        <Quote className="absolute right-6 top-6 h-12 w-12 text-theme-primary-400 opacity-20" />
        <div className="pt-10">
          <p className="mb-6 text-lg text-muted-foreground">{content}</p>
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image src={image} alt={author} fill className="object-cover" />
            </div>
            <div>
              <div className="font-semibold text-foreground">{author}</div>
              <div className="text-sm text-muted-foreground">
                {role}, {company}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-6 top-6 flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-theme-primary-400 text-theme-primary-400" />
          ))}
        </div>
      </CardContent>
    </Card>
  );