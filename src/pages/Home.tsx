import { Link as RouterLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import {
  Card,
  CardContent,
  CardMedia,
  Icon,
  Stack,
  Typography,
} from "@mui/material";

function Home() {
  return (
    <Stack
      direction="column"
      sx={{ backgroundColor: "var(--neutral-OffWhite)", height: "100%" }}
    >
      <Stack
        direction="column"
        sx={{
          padding: "40px",
          backgroundColor: "var(--secondary-Rockpool)",
        }}
      >
        <Typography variant="h1">Welcome to Redacliff Place</Typography>
        <Typography variant="h3">
          Explore things to do and see around you
        </Typography>
      </Stack>
      <Grid
        container
        spacing={2}
        sx={{ padding: "40px", alignItems: "stretch" }}
      >
        <Grid size={4} component={RouterLink} to="/events">
          <Card variant="outlined" sx={{ height: "300px" }}>
            <CardMedia
              sx={{
                height: 140,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Icon sx={{ fontSize: 100, color: "var(--secondary-DeepOcean)" }}>
                stadium
              </Icon>
            </CardMedia>
            <CardContent>
              <Typography variant="h2" align="center">
                Events
              </Typography>
              <Typography variant="body1" align="center">
                Local art, culture, and music events
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={4} component={RouterLink} to="/transport">
          <Card variant="outlined" sx={{ height: "300px" }}>
            <CardMedia
              sx={{
                height: 140,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Icon sx={{ fontSize: 100, color: "var(--secondary-DeepOcean)" }}>
                boat_bus
              </Icon>
            </CardMedia>
            <CardContent>
              <Typography variant="h2" align="center">
                Transport
              </Typography>
              <Typography variant="body1" align="center">
                Public transport hubs and stops
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={4} component={RouterLink} to="/guides">
          <Card variant="outlined" sx={{ height: "300px" }}>
            <CardMedia
              sx={{
                height: 140,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Icon sx={{ fontSize: 100, color: "var(--secondary-DeepOcean)" }}>
                directions_walk
              </Icon>
            </CardMedia>
            <CardContent>
              <Typography variant="h2" align="center">
                Walking guides
              </Typography>
              <Typography variant="body1" align="center">
                Discover hidden treasures around you
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={4} component={RouterLink} to="/facilities">
          <Card variant="outlined" sx={{ height: "300px" }}>
            <CardMedia
              sx={{
                height: 140,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Icon sx={{ fontSize: 100, color: "var(--secondary-DeepOcean)" }}>
                family_restroom
              </Icon>
            </CardMedia>
            <CardContent>
              <Typography variant="h2" align="center">
                Facilities
              </Typography>
              <Typography variant="body1" align="center">
                Public toilet and change places
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Home;
