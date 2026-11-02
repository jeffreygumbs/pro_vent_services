/// <reference types="google.maps" />
"use client";

import { useEffect, useRef } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";

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
      setOptions({
        key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        v: "weekly",
      });

      const { Map } = (await importLibrary("maps")) as google.maps.MapsLibrary;
      const { Marker } = (await importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

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
        new Marker({
          position: center,
          map: mapInstanceRef.current,
          title: "Pro-Vent Services",
        });
      }
    };

    initMap();
  }, [center, zoom]);

  return <div ref={mapRef} className="w-full h-[400px] rounded-lg" />;
}
