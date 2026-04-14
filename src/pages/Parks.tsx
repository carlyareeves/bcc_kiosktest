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

function Parks() {
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
          Parks and greenspaces
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
            minWidth: "0",
            padding: "24px",
            backgroundColor: "white",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          <Swiper
            spaceBetween={16}
            slidesPerView={3.5}
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
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                  ></CardMedia>
                  <CardContent>
                    <Typography variant="h5">Item 1 title</Typography>
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
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                  ></CardMedia>
                  <CardContent>
                    <Typography variant="h5">Item 2 title</Typography>
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
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                  ></CardMedia>
                  <CardContent>
                    <Typography variant="h5">Item 3 title</Typography>
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
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                  ></CardMedia>
                  <CardContent>
                    <Typography variant="h5">Item 4 title</Typography>
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
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                  ></CardMedia>
                  <CardContent>
                    <Typography variant="h5">Item 5 title</Typography>
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
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                  ></CardMedia>
                  <CardContent>
                    <Typography variant="h5">Item 6 title</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
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
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                  ></CardMedia>
                  <CardContent>
                    <Typography variant="h5">Item 7 title</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
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
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                  ></CardMedia>
                  <CardContent>
                    <Typography variant="h5">Item 8 title</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
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
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                  ></CardMedia>
                  <CardContent>
                    <Typography variant="h5">Item 9 title</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Stack>
    </Stack>
  );
}

export default Parks;
