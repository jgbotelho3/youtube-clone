import React from "react";
import { Box, Toolbar, Typography, Grid } from "@material-ui/core";
import { videoInfo } from "../../mock";
const Content = () => {
  return (
    <Box p={5}>
      <Toolbar />
      <Typography variant="h5" color="textPrimary" style={{ fontWeight: 800 }}>
        Recommended
      </Typography>
      <Grid container spacing={3}>
        {videoInfo.map((item, index) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
            <Box>
              <img
                src={item.thumb}
                alt={item.title}
                style={{ width: "100%" }}
              />
              <Box>
                <Typography
                  style={{ fontWeight: 600 }}
                  gutterBottom
                  variant="body1"
                  color="textPrimary"
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.channel}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {`${item.views} . ${item.date}`}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Content;
