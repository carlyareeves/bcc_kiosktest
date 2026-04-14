import { useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
  Stack,
} from "@mui/material";
import Pagination from "../components/Pagination";
import data from "../data/brisbane-city-council-public-art.json";

interface ArtFeature {
  index: number;
  item_title: string;
  artist: string;
  description: string;
  material: string;
}

const PublicArt: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const itemsPlural = "artworks";

  // Calculate indices and current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = (data as ArtFeature[]).slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  // Calculate total items
  const totalItems = Math.ceil((data as ArtFeature[]).length);

  // Calculate total pages
  const totalPages = Math.ceil((data as ArtFeature[]).length / itemsPerPage);

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
          Public art
        </Typography>
        <Typography sx={{ fontSize: "28px" }}>
          Discover street art, sculpture and murals
        </Typography>
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
            padding: "32px",
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
          <Stack direction={"row"} gap={2}>
            {currentItems.map((item) => (
              <Box sx={{ display: "flex", flexGrow: "0" }}>
                <Card
                  elevation={8}
                  key={item["item_title"]}
                  sx={{
                    maxHeight: "300px",
                    borderRadius: "16px",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                    ></CardMedia>
                    <CardContent>
                      <Typography variant="h5">{item["item_title"]}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default PublicArt;
