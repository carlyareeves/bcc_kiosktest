import { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
  Stack,
} from "@mui/material";
import Pagination from "../components/Pagination";
import data from "../data/brisbane-city-council-events.json";
import FilterEvents from "../components/FilterEvents";

interface EventsFeature {
  subject: string;
  eventimage: string;
  primaryeventtype: string;
}

const Events: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const itemsPlural = "events";

  // Calculate indices and current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = (data as EventsFeature[]).slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const totalItems = Math.ceil((data as EventsFeature[]).length);

  // Calculate total pages
  const totalPages = Math.ceil((data as EventsFeature[]).length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
          Events
        </Typography>
        <Typography sx={{ fontSize: "28px" }}>
          Attend an event or find an activity in the heart of the city
        </Typography>
        <FilterEvents />
      </Stack>
      <Stack
        direction="column"
        sx={{
          padding: "0 40px 0",
          gap: "16px",
        }}
      >
        <Box
          sx={{
            padding: "24px 32px 0",
            backgroundColor: "white",
            borderRadius: "16px",
          }}
        >
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={totalItems}
            itemsPlural={itemsPlural}
            onPageChange={handlePageChange}
          />
          <Grid
            container
            direction="row"
            spacing={2}
            sx={{ alignItems: "stretch" }}
          >
            {currentItems.map((item) => (
              <Grid size={4}>
                <Card
                  elevation={8}
                  key={item["subject"]}
                  sx={{
                    maxHeight: "300px",
                    borderRadius: "16px",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={item["eventimage"]}
                    ></CardMedia>
                    <CardContent>
                      <Typography variant="h5">{item["subject"]}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Events;
