import { ClientAvatar } from "./ClientAvatar";

type clientAvatar = {
  image: string;
};

type Props = {
  clientAvatars: clientAvatar[];
};

export const TestimonialSmall = ({ clientAvatars }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-3">
        {clientAvatars.map((avatar, i) => (
          <ClientAvatar key={i} {...avatar} index={i} />
        ))}
      </div>
      <div className="text-sm">
        <span className="font-bold text-white">500+</span>{" "}
        <span className="text-theme-neutral-400">Happy Clients</span>
      </div>
    </div>
  );
};
