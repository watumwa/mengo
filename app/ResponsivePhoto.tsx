import type { CSSProperties, ImgHTMLAttributes } from "react";
import type { ChamberPhoto } from "./realPhotos";

type ResponsivePhotoProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & {
  photo: ChamberPhoto;
  width: number;
  height: number;
  sizes?: string;
  style?: CSSProperties;
};

export function ResponsivePhoto({
  photo,
  width,
  height,
  sizes,
  style,
  loading = "lazy",
  ...props
}: ResponsivePhotoProps) {
  return (
    <img
      src={photo.src}
      alt={photo.alt}
      width={width}
      height={height}
      sizes={sizes}
      loading={loading}
      decoding="async"
      style={{ objectPosition: photo.position, ...style }}
      {...props}
    />
  );
}
