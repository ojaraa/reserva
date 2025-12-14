import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const CustomAvatar = ({ src, fallback, className }: { src?: string; fallback?: string; className?: string }) => {
  return (
    <Avatar className={className}>
      <AvatarImage  src={src} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
};
