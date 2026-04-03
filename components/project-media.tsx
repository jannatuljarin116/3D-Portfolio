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
      <div
        className="bg-muted/80 text-muted-foreground relative flex aspect-[600/400] w-full items-center justify-center overflow-hidden rounded-none text-xs"
        role="img"
        aria-label={imageAlt}
      >
        <span
          className="absolute inset-0 animate-pulse bg-linear-to-r from-transparent via-foreground/5 to-transparent motion-reduce:animate-none"
          aria-hidden
        />
        <span className="relative z-[1] font-medium">Preview coming soon</span>
      </div>
    );
  }
  return (
    <div className="bg-muted relative aspect-[600/400] w-full overflow-hidden rounded-none">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        sizes="(max-width: 768px) 100vw, 560px"
      />
    </div>
  );
}
