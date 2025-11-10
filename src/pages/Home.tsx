import { Link as RouterLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Card, CardContent, Stack, Typography } from "@mui/material";

function Home() {
  return (
    <Stack
      direction="column"
      sx={{ backgroundColor: "var(--neutral-OffWhite)", height: "100%" }}
    >
      <Stack
        direction="column"
        sx={{
          padding: "80px",
          backgroundColor: "var(--secondary-Rockpool)",
        }}
      >
        <Typography variant="h2">Welcome to Redacliff Place</Typography>
        <Typography variant="h5">
          Explore things to do and see around you
        </Typography>
      </Stack>
      <Grid container spacing={2} sx={{ padding: "80px" }}>
        <Grid size={4} component={RouterLink} to="/events">
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h4" align="center">
                Events
              </Typography>
              <Typography variant="body1" align="center">
                Local art, culture, and music events
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={4} component={RouterLink} to="/transport">
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h4" align="center">
                Transport
              </Typography>
              <Typography variant="body1" align="center">
                Public transport hubs and stops
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={4} component={RouterLink} to="/guides">
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h4" align="center">
                Walking guides
              </Typography>
              <Typography variant="body1" align="center">
                Discover hidden treasures around you
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={4} component={RouterLink} to="/facilities">
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h4" align="center">
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
