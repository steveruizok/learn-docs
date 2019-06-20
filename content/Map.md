---
path: "/content/Map/"
date: "2019-07-01"
title: "Map"
tags: ["components"]
---

🚧 👷‍♂️`Under Construction` 👷‍♀️🚧

```tsx
type Props = Partial<FrameProps> & {
  accessToken: string;
} & Partial<{
    style: string;
    styleUrl: string;
    longitude: number;
    latitude: number;
    zoom: number;
    pitch: number;
    bearing: number;
    markers: Marker[];
    fitBounds: boolean;
    minZoom: number;
    maxZoom: number;
    padding: number;
    debug: boolean;
    onClick: MapEvent;
    onMouseEnter: MapEvent;
    onMouseLeave: MapEvent;
    onStyleLoad: (map: mapboxgl.Map) => void;
    prepareViewport: (previous: Viewport, next: Viewport) => Viewport;
    onViewportChange: (viewport: Viewport, markers: mapboxgl.Marker[]) => void;
    onMarkerClick: MarkerEventHandler;
    onMarkerMouseEnter: MarkerEventHandler;
    onMarkerMouseLeave: MarkerEventHandler;
    onMarkerMouseDown: MarkerEventHandler;
    onMarkerMouseUp: MarkerEventHandler;
    onMarkerDragStart: MarkerEventHandler;
    onMarkerDrag?: MarkerEventHandler;
    onMarkerDragEnd: MarkerEventHandler;
  }>;
```
