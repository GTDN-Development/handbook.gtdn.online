import * as React from "react";

export type GoogleMapProps = Omit<React.ComponentProps<"iframe">, "src"> & {
  title?: string;
  address: string;
  zoom?: number;
  width?: string | number;
  height?: string | number;
};

export function GoogleMap({
  address,
  width = "100%",
  height = 450,
  zoom = 12,
  title = "Google map",
  loading = "lazy",
  allowFullScreen = true,
  ...props
}: GoogleMapProps) {
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps?q=${encodedAddress}&z=${zoom}&output=embed`;

  return (
    <iframe
      {...props}
      title={title}
      src={mapUrl}
      width={width}
      height={height}
      loading={loading}
      allowFullScreen={allowFullScreen}
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
