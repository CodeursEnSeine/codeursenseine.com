// Used in next.config.js
export default function staticImageLoader({ src }: { src: string }) {
  const prefix = `/archive-${process.env.NEXT_PUBLIC_ARCHIVE_YEAR}`;
  return src.startsWith('/') && !src.startsWith(prefix)
    ? `${prefix}${src}`
    : src;
}
