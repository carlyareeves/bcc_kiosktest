import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";

import {
  Box,
  Stack,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";

function Historical() {
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
          Historical
        </Typography>
        <Typography sx={{ fontSize: "28px" }}>
          Explore our city’s historical buildings and sites
        </Typography>
      </Stack>
      <Stack
        direction="column"
        sx={{
          maxWidth: "100%",
          padding: "16px 40px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "16px 16px 0 0",
            overflow: "hidden",
          }}
        >
          <Swiper
            spaceBetween={16}
            slidesPerView={3.25}
            slidesPerGroup={3}
            navigation
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            snapToSlideEdge
            modules={[Navigation, Pagination]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="listings_swiper"
          >
            <SwiperSlide>
              <Card
                elevation={8}
                sx={{
                  maxHeight: "300px",
                  borderRadius: "8px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="/images/cq5dam.web.annchurch.jpeg"
                  ></CardMedia>
                  <CardContent>
                    <Typography variant="h5">
                      King Edward Park Air Raid Shelter
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card
                elevation={8}
                sx={{
                  maxHeight: "300px",
                  borderRadius: "8px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="/images/cq5dam.web.cityhall.jpeg"
                  ></CardMedia>
                  <CardContent>
                    <Typography variant="h5">
                      King Edward Park and Jacob's Ladder
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card
                elevation={8}
                sx={{
                  maxHeight: "300px",
                  borderRadius: "8px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="/images/cq5dam.web.kinggeorge.jpeg"
                  ></CardMedia>
                  <CardContent>
                    <Typography variant="h5">
                      Central Railway Station
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card
                elevation={8}
                sx={{
                  maxHeight: "300px",
                  borderRadius: "8px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="/images/cq5dam.web.regent.jpeg"
                  ></CardMedia>
                  <CardContent>
                    <Typography variant="h5">Anzac Square</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card
                elevation={8}
                sx={{
                  maxHeight: "300px",
                  borderRadius: "8px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="/images/cq5dam.web.shelter.jpeg"
                  ></CardMedia>
                  <CardContent>
                    <Typography variant="h5">Newspaper House</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card
                elevation={8}
                sx={{
                  maxHeight: "300px",
                  borderRadius: "8px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="/images/cq5dam.web.palace.jpeg"
                  ></CardMedia>
                  <CardContent>
                    <Typography variant="h5">
                      General Post Office (GPO)
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card
                elevation={8}
                sx={{
                  maxHeight: "300px",
                  borderRadius: "8px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="/images/cq5dam.web.station.jpeg"
                  ></CardMedia>
                  <CardContent>
                    <Typography variant="h5">
                      Old St Stephen's Church
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card
                elevation={8}
                sx={{
                  maxHeight: "300px",
                  borderRadius: "8px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="/images/cq5dam.web.ladder.jpeg"
                  ></CardMedia>
                  <CardContent>
                    <Typography variant="h5">MacArthur Chambers</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card
                elevation={8}
                sx={{
                  maxHeight: "300px",
                  borderRadius: "8px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image="/images/cq5dam.web.1280.1280.jpeg"
                  ></CardMedia>
                  <CardContent>
                    <Typography variant="h5">
                      Regent Building (Regent Theatre former)
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
          </Swiper>
        </Box>
        <Box sx={{ backgroundColor: "white", padding: "24px" }}>
          Drawer opens below card list
        </Box>
      </Stack>
    </Stack>
  );
}

export default Historical;
