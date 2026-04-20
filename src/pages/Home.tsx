import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import {
  Card,
  CardContent,
  CardMedia,
  Icon,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import PromoMap from "./PromoMap";

function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          padding: "80px 40px 40px",
        }}
      >
        <Typography variant="h1">Good morning,</Typography>
        <Typography sx={{ fontSize: "28px" }}>
          Ready to explore things to do and see around you?
        </Typography>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <PromoMap onClose={handleClose} />
      </Modal>
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
        <Grid size={4} component={RouterLink} to="/walks">
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
                follow_the_signs
              </Icon>
            </CardMedia>
            <CardContent>
              <Typography variant="h2" align="center">
                Walks
              </Typography>
              <Typography variant="body1" align="center">
                Discover hidden treasures around you
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={4} component={RouterLink} to="/transport">
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
        <Grid size={4} component={RouterLink} to="/art">
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
                palette
              </Icon>
            </CardMedia>
            <CardContent>
              <Typography variant="h2" align="center">
                Public art
              </Typography>
              <Typography variant="body1" align="center">
                Street art, murals, and sculptures
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={4} component={RouterLink} to="/historical">
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
                temple_buddhist
              </Icon>
            </CardMedia>
            <CardContent>
              <Typography variant="h2" align="center">
                Historical
              </Typography>
              <Typography variant="body1" align="center">
                Explore historical buildings and sites
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={4} component={RouterLink} to="/facilities">
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
                family_restroom
              </Icon>
            </CardMedia>
            <CardContent>
              <Typography variant="h2" align="center">
                Amenities
              </Typography>
              <Typography variant="body1" align="center">
                Public toilet and change places
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={4} component={RouterLink} to="/parks">
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
                nature
              </Icon>
            </CardMedia>
            <CardContent>
              <Typography variant="h2" align="center">
                Parks
              </Typography>
              <Typography variant="body1" align="center">
                Public parks, gardens, and greenspaces
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={8}>
          <Card
            onClick={handleOpen}
            elevation={0}
            sx={{
              height: "300px",
              borderRadius: "16px",
              backgroundColor: "var(--primary-Yellow)",
              alignContent: "center",
            }}
          >
            <CardContent>
              <Typography variant="h2" align="center">
                around you
              </Typography>
              <Typography
                variant="h4"
                align="center"
                color="var(--primary-Blue)"
              >
                ad graphic
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Home;
