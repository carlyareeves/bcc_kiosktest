import { useState } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Typography,
  CardMedia,
  Stack,
  Chip,
} from "@mui/material";
import Pagination from "../components/Pagination";
import data from "../data/brisbane-city-council-events.json";

interface EventsFeature {
  subject: string;
  eventimage: string;
  primaryeventtype: string;
}

const Events: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Calculate indices and current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = (data as EventsFeature[]).slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Calculate total pages
  const totalPages = Math.ceil((data as EventsFeature[]).length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Stack direction="column" sx={{ height: "100%" }}>
      <Stack
        direction="column"
        sx={{
          padding: "40px 0",
          backgroundColor: "var(--secondary-Rockpool)",
        }}
      >
        <Container>
          <Typography variant="h2">Events</Typography>
          <Typography variant="h3">
            Local art culture and music events
          </Typography>
        </Container>
      </Stack>
      <Stack
        direction="column"
        sx={{ justifyContent: "space-between", height: "100%" }}
      >
        <Container>
          <Grid
            container
            direction="row"
            spacing={2}
            sx={{ padding: "40px 0", alignItems: "stretch" }}
          >
            {currentItems.map((item) => (
              <Grid size={4} sx={{ alignSelf: "stretch" }}>
                <Card key={item["subject"]} sx={{ height: "100%" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="180"
                      image={item["eventimage"]}
                    ></CardMedia>
                    <CardContent>
                      <Typography variant="h3">{item["subject"]}</Typography>
                      <Chip
                        label={item["primaryeventtype"]}
                        variant="outlined"
                      />
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </Container>
      </Stack>
    </Stack>
  );
};

export default Events;
