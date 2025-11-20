import { useState } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
  Container,
} from "@mui/material";
import Pagination from "../components/Pagination";
import data from "../data/public-toilets-in-brisbane.json";

interface FacilitiesFeature {
  facilityid: string;
  id: string;
  name: string;
  babychange: string;
  address1: string;
}

const Facilities: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate indices and current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = (data as FacilitiesFeature[]).slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Calculate total pages
  const totalPages = Math.ceil(
    (data as FacilitiesFeature[]).length / itemsPerPage
  );

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
          <Typography variant="h2">Public facilities</Typography>
          <Typography variant="h3">
            Toilets and changing places, libraries, and pools
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
            spacing={2}
            sx={{ padding: "40px 0", alignItems: "stretch" }}
          >
            {currentItems.map((item) => (
              <Grid size={4}>
                <Card key={item["id"]}>
                  <CardActionArea>
                    <CardContent>
                      <Typography>{item["name"]}</Typography>
                      <Typography>{item["address1"]}</Typography>
                      <Typography>{item["babychange"]}</Typography>
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

export default Facilities;
