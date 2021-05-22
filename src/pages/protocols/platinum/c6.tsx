import React from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "./style";
import Container from "@material-ui/core/Container";
import { IMAGES_URL } from "../../../constants/Images";

const C6 = () => {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      {/* Tab 1 Start */}
      {/* Tab 4 Start */}
      <Grid container spacing={4}>

        <Grid item xs={12} sm={4} md={3} lg={3}>
          <img alt=""
            src={IMAGES_URL.BRAND_IMG1}
            style={{ width: "100%", }}
          />
        </Grid>

        <Grid item xs={12} sm={4} md={3} lg={3}>
          <img alt=""
            src={IMAGES_URL.BRAND_IMG2}
            style={{ width: "100%", }}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <img alt=""
            src={IMAGES_URL.BRAND_IMG3}
            style={{ width: "100%", }}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <img alt=""
            src={IMAGES_URL.BRAND_IMG4}
            style={{ width: "100%", }}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <img alt=""
            src={IMAGES_URL.BRAND_IMG5}
            style={{ width: "100%", }}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <img alt=""
            src={IMAGES_URL.BRAND_IMG6}
            style={{ width: "100%", }}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <img alt=""
            src={IMAGES_URL.BRAND_IMG7}
            style={{ width: "100%", }}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <img alt=""
            src={IMAGES_URL.BRAND_IMG8}
            style={{ width: "100%", }}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <img alt=""
            src={IMAGES_URL.BRAND_IMG9}
            style={{ width: "100%", }}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <img alt=""
            src={IMAGES_URL.BRAND_IMG10}
            style={{ width: "100%", }}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <img alt=""
            src={IMAGES_URL.BRAND_IMG11}
            style={{ width: "100%", }}
          />
        </Grid>



        {/* Tab 4 End */}
      </Grid>
    </Container>
  );
};

export default C6;
