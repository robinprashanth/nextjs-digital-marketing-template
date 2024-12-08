import { ClientAvatarProps } from "@/types";
import Image from "next/image";
import { FC } from "react";

export const ClientAvatar: FC<ClientAvatarProps> = ({ image, index }) => (
  <div
    className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[#0B0B1E]"
    style={{ zIndex: 4 - index }}
  >
    <Image
      src={image}
      alt={`Client ${index + 1}`}
      fill
      className="object-cover"
      sizes="40px"
    />
  </div>
);
