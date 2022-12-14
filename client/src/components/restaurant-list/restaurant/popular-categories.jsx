import React from "react";
import { Typography } from "@mui/material";
import { Box, Grid, Button } from "@mui/material";
import popular from "./popular";
function PopularCategories() {
  return (
    <Box>
      <Typography
        variant="h3"
        mx={5}
        fontFamily="Raleway, sans-serif"
        fontWeight="700"
        color="#fff">
        Popular Categories
      </Typography>
      <Box sx={{ flexGrow: 1 }} mx={5} my={2}>
        <Grid
          container
          spacing={{ xs: 1, sm: 2, md: 2 }}
          columns={{ xs: 2, sm: 3, md: 6 }}>
          {popular.map((item, index) => {
            return (
              <Grid item key={index}>
                <Button key={index} sx={{ padding: 0 }}>
                  {item.Svg}
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export default PopularCategories;
