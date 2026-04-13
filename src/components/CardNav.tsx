import { Card, CardMedia, CardContent, Icon, Typography } from "@mui/material";

function CardNav() {
  return (
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
        <Icon sx={{ fontSize: 80, color: "var(--primary-Blue)" }}>stadium</Icon>
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
  );
}

export default CardNav;
