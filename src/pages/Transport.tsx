import { Container, Stack, Typography } from "@mui/material";
import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import ButtonFilter from "../components/ButtonFilter";

function Transport() {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set your Mapbox access token
    mapboxgl.accessToken =
      "pk.eyJ1IjoicGVyZmVjdDV0aCIsImEiOiJjbTV5ajY1N3MwbWlnMnFweTlyY2E2dno4In0.jO71HPpChh9rcX3uYEL7cg";

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current!,
      center: [153.0227378820481, -27.47089294758758],
      zoom: 18,
      config: {
        basemap: {
          theme: "monochrome",
          font: "Noto Sans",
          show3dObjects: false,
          showPlaceLabels: false,
          showPointofInterestLabels: false,
          showLandmarkIcons: false,
        },
      },
    });

    mapRef.current.addControl(
      new mapboxgl.NavigationControl({
        showCompass: false, // Show compass button (defaults to true)
        showZoom: true, // Show zoom buttons (defaults to true)
        visualizePitch: false, // Visualize pitch on the compass (defaults to false)
      }),
      "bottom-right" // Position of the control on the map
    );

    return () => {
      mapRef.current?.remove();
    };
  }, []);

  return (
    <>
      <Stack direction="column" sx={{ height: "100%" }}>
        <Stack
          direction="column"
          sx={{
            padding: "40px 0",
            backgroundColor: "var(--secondary-Rockpool)",
          }}
        >
          <Container>
            <Typography variant="h2">Transport</Typography>
            <Typography variant="h3">Stops and hubs</Typography>
          </Container>
        </Stack>
        <Container>
          <Stack
            direction="row"
            sx={{
              padding: "20px 0",
              backgroundColor: "var(--secondary-Mist)",
            }}
          >
            <ButtonFilter />
          </Stack>
        </Container>
        <div className="map_wrapper" ref={mapContainerRef}></div>
      </Stack>
    </>
  );
}

export default Transport;
