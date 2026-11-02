"use client";

import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

interface MapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom?: number;
}

export function Map({ center, zoom = 11 }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");

      if (mapRef.current && !mapInstanceRef.current) {
        mapInstanceRef.current = new Map(mapRef.current, {
          center,
          zoom,
          mapId: "pro-vent-map",
          disableDefaultUI: false,
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          styles: [
            {
              featureType: "all",
              elementType: "labels.text.fill",
              stylers: [{ color: "#000000" }],
            },
            {
              featureType: "all",
              elementType: "labels.text.stroke",
              stylers: [{ visibility: "on" }, { color: "#ffffff" }, { weight: 2 }],
            },
          ],
        });

        // Add a marker for Pro-Vent Services
        new google.maps.Marker({
          position: center,
          map: mapInstanceRef.current,
          title: "Pro-Vent Services",
          animation: google.maps.Animation.DROP,
        });
      }
    };

    initMap();
  }, [center, zoom]);

  return <div ref={mapRef} className="w-full h-[400px] rounded-lg" />;
}
