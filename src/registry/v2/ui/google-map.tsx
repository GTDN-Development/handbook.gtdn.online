import * as React from "react";
import { cn } from "@/lib/utils";

export type GoogleMapProps = React.ComponentProps<"div"> & {
  address: string;
  width?: string | number;
  height?: string | number;
  zoom?: number;
  title?: string;
};

export function GoogleMap({
  address,
  width = "100%",
  height = 450,
  zoom = 12,
  className,
  title = "Google Maps",
}: GoogleMapProps) {
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps?q=${encodedAddress}&z=${zoom}&output=embed`;

  return (
    <div
      className={cn(
        "border-border-default relative overflow-hidden rounded-xl border sm:rounded-2xl",
        className
      )}
    >
      <iframe
        src={mapUrl}
        width={width}
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        className="size-full"
      />
    </div>
  );
}
