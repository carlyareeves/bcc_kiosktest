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
      sx={{
        height: "100%",
        background:
          "linear-gradient(154deg, var(--solids-white, rgba(255, 255, 255, 0.20)) 6.6%, rgba(0, 46, 83, 0.20) 80.53%), radial-gradient(42% 70.39% at 74% 28.65%, var(--brandSecondary-deepOcean, rgba(0, 46, 83, 0.20)) 0%, var(--brandSecondary-rockPool, rgba(236, 245, 251, 0.20)) 100%), radial-gradient(30.95% 68.47% at 28.68% 82.78%, var(--brandSecondary-sky, #D4E7F4) 0%, var(--brandSecondary-mist, #F8FCFF) 100%);",
      }}
    >
      <Stack
        direction="column"
        sx={{
          padding: "40px",
        }}
      >
        <Typography variant="h1">Good morning,</Typography>
        <Typography sx={{ fontSize: "28px" }}>
          Ready to explore things to do and see around you?
        </Typography>
      </Stack>
      <Grid
        container
        spacing={2}
        sx={{ padding: "40px", alignItems: "stretch" }}
      >
        <Grid size={4} component={RouterLink} to="/events">
          <Card
            variant="outlined"
            sx={{
              height: "300px",
              borderWidth: "8px",
              borderRadius: "16px",
              borderColor: "var(--secondary-Rockpool)",
            }}
          >
            <CardMedia
              sx={{
                height: 120,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Icon sx={{ fontSize: 80, color: "var(--primary-Blue)" }}>
                stadium
              </Icon>
            </CardMedia>
            <CardContent>
              <Typography variant="h2" align="center">
                Events
              </Typography>
              <Typography variant="body1" align="center">
                Local arts, culture, and music events
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={4} component={RouterLink} to="/transport">
          <Card variant="outlined" sx={{ height: "300px" }}>
            <CardMedia
              sx={{
                height: 120,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Icon sx={{ fontSize: 80, color: "var(--secondary-DeepOcean)" }}>
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
                height: 120,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Icon sx={{ fontSize: 80, color: "var(--secondary-DeepOcean)" }}>
                directions_walk
              </Icon>
            </CardMedia>
            <CardContent>
              <Typography variant="h2" align="center">
                Guides
              </Typography>
              <Typography variant="body1" align="center">
                Discover hidden treasures around you
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={4}>
          <Card variant="outlined" sx={{ height: "300px" }}>
            <CardMedia
              image="/images/Parcels-Promo.webp"
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            ></CardMedia>
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
