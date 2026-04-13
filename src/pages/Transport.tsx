import { Box, Stack, Typography } from "@mui/material";
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
      "pk.eyJ1IjoicGVyZmVjdDV0aCIsImEiOiJjbW53dWl1djgwMDh1MnFxMGU3em44dTM0In0.P_Goyffg2wyy1BYTIzx6tg";

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current!,
      center: [153.0227378820481, -27.47089294758758],
      zoom: 17,
      config: {
        basemap: {
          theme: "monochrome",
          font: "Figtree",
          show3dObjects: false,
          showPlaceLabels: false,
          showPointofInterestLabels: false,
          showLandmarkIcons: false,
        },
      },
      interactive: false,
    });

    mapRef.current.touchZoomRotate.disableRotation();

    // mapRef.current.addControl(
    //   new mapboxgl.NavigationControl({
    //     showCompass: false, // Show compass button (defaults to true)
    //     showZoom: false, // Show zoom buttons (defaults to true)
    //     visualizePitch: false, // Visualize pitch on the compass (defaults to false)
    //   }),
    //   "bottom-right" // Position of the control on the map
    // );

    return () => {
      mapRef.current?.remove();
    };
  }, []);

  return (
    <Stack
      direction="column"
      sx={{
        height: "100%",
        background:
          "linear-gradient(154deg, var(--solids-white, rgba(255, 255, 255, 0.20)) 6.6%, rgba(0, 46, 83, 0.20) 80.53%), radial-gradient(42% 70.39% at 74% 28.65%, var(--brandSecondary-deepOcean, rgba(0, 46, 83, 0.20)) 0%, var(--brandSecondary-rockPool, rgba(236, 245, 251, 0.20)) 100%), radial-gradient(30.95% 68.47% at 28.68% 82.78%, var(--brandSecondary-sky, #D4E7F4) 0%, var(--brandSecondary-mist, #F8FCFF) 100%);",
      }}
    >
      <Stack
        direction="column"
        sx={{
          padding: "80px 40px 16px",
          gap: "16px",
        }}
      >
        <Typography sx={{ fontSize: "56px", fontWeight: "600" }}>
          Public transport
        </Typography>
        <Typography sx={{ fontSize: "28px" }}>
          Explore transport options across Brisbane City
        </Typography>
        <ButtonFilter />
      </Stack>
      <Box
        sx={{
          padding: "0 40px",
          height: "100%",
        }}
      >
        <div className="map_wrapper" ref={mapContainerRef}></div>
      </Box>
    </Stack>
  );
}

export default Transport;
