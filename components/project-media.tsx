import Image from "next/image";

export function ProjectMedia({
  imageSrc,
  imageAlt,
}: {
  imageSrc: string | null;
  imageAlt: string;
}) {
  if (!imageSrc) {
    return (
      <div className="bg-muted text-muted-foreground flex aspect-[600/400] w-full items-center justify-center text-xs">
        No preview yet
      </div>
    );
  }
  return (
    <div className="relative aspect-[600/400] w-full overflow-hidden bg-muted">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        sizes="(max-width: 768px) 100vw, 560px"
      />
    </div>
  );
}
