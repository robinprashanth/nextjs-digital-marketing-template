"use client"

import { FC } from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from 'react-share';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Share2,
  Mail,
  MessageCircle
} from 'lucide-react';

const domain = process.env.NEXT_PUBLIC_APP_URL!;

interface SocialShareModernProps {
  url: string;
  title: string;
  description?: string;
}

export const SocialShareModern: FC<SocialShareModernProps> = ({
  url,
  title,
  description,
}) => {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="mb-3 flex items-center gap-2">
        <Share2 className="h-5 w-5 text-theme-primary-500" />
        <span className="font-medium text-foreground">Share this article</span>
      </div>
      
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <FacebookShareButton 
         url={`${domain}${url}`}
          
          className="w-full rounded-lg bg-theme-primary-500/5 px-4 py-2.5 text-theme-primary-500 transition-colors hover:bg-theme-primary-500/10"
        >
          <div className="flex items-center justify-center gap-2">
            <Facebook className="h-4 w-4" />
            <span className="text-sm font-medium">Facebook</span>
          </div>
        </FacebookShareButton>

        <TwitterShareButton 
         url={`${domain}${url}`}
          title={title}
          className="w-full rounded-lg bg-theme-ocean-500/5 px-4 py-2.5 text-theme-ocean-500 transition-colors hover:bg-theme-ocean-500/10"
        >
          <div className="flex items-center justify-center gap-2">
            <Twitter className="h-4 w-4" />
            <span className="text-sm font-medium">Twitter</span>
          </div>
        </TwitterShareButton>

        <LinkedinShareButton 
         url={`${domain}${url}`}
          title={title}
          summary={description}
          className="w-full rounded-lg bg-blue-500/5 px-4 py-2.5 text-blue-500 transition-colors hover:bg-blue-500/10"
        >
          <div className="flex items-center justify-center gap-2">
            <Linkedin className="h-4 w-4" />
            <span className="text-sm font-medium">LinkedIn</span>
          </div>
        </LinkedinShareButton>

        <WhatsappShareButton 
         url={`${domain}${url}`}
          title={title}
          className="w-full rounded-lg bg-emerald-500/5 px-4 py-2.5 text-emerald-500 transition-colors hover:bg-emerald-500/10"
        >
          <div className="flex items-center justify-center gap-2">
            <MessageCircle className="h-4 w-4" />
            <span className="text-sm font-medium">WhatsApp</span>
          </div>
        </WhatsappShareButton>

        <EmailShareButton 
         url={`${domain}${url}`}
          subject={title}
          body={description}
          className="w-full rounded-lg bg-theme-rose-500/5 px-4 py-2.5 text-theme-rose-500 transition-colors hover:bg-theme-rose-500/10"
        >
          <div className="flex items-center justify-center gap-2">
            <Mail className="h-4 w-4" />
            <span className="text-sm font-medium">Email</span>
          </div>
        </EmailShareButton>
      </div>
    </div>
  );
};