"use client"

import { FC } from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  EmailIcon,
} from 'react-share';

const domain = process.env.NEXT_PUBLIC_APP_URL!;

interface SocialShareMinimalProps {
  url: string;
  title: string;
  description?: string;
}

export const SocialShareMinimal: FC<SocialShareMinimalProps> = ({
  url,
  title,
  description,
}) => {
  const iconSize = 36;
  const round = true;

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="text-sm font-medium text-muted-foreground">
        Share this post:
      </div>
      
      <div className="flex gap-2">
        <FacebookShareButton url={`${domain}${url}`} className="transition-transform hover:scale-110">
          <FacebookIcon size={iconSize} round={round} />
        </FacebookShareButton>

        <TwitterShareButton url={`${domain}${url}`} title={title} className="transition-transform hover:scale-110">
          <TwitterIcon size={iconSize} round={round} />
        </TwitterShareButton>

        <LinkedinShareButton url={`${domain}${url}`} title={title} summary={description} className="transition-transform hover:scale-110">
          <LinkedinIcon size={iconSize} round={round} />
        </LinkedinShareButton>

        <WhatsappShareButton url={`${domain}${url}`} title={title} className="transition-transform hover:scale-110">
          <WhatsappIcon size={iconSize} round={round} />
        </WhatsappShareButton>

        <EmailShareButton url={`${domain}${url}`} subject={title} body={description} className="transition-transform hover:scale-110">
          <EmailIcon size={iconSize} round={round} />
        </EmailShareButton>
      </div>
    </div>
  );
};