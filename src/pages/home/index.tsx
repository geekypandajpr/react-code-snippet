import React from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "./style";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { IMAGES_URL } from "../../constants/Images";


const PageHome = () => {
  const classes = useStyles();
  const img = [
    {
      img: IMAGES_URL.MAIN_ICON1,
      url: "/protocols/platinum",
    },
    { img: IMAGES_URL.MAIN_ICON2, url: "/protocols/deluxe" },
    { img: IMAGES_URL.MAIN_ICON3, url: "/protocols/signature" },
  ];

  const img1 = [
    IMAGES_URL.SUB_ICON1,
    IMAGES_URL.SUB_ICON2,
    IMAGES_URL.SUB_ICON3,
    IMAGES_URL.SUB_ICON4,
    IMAGES_URL.SUB_ICON5,
    IMAGES_URL.SUB_ICON6,
    IMAGES_URL.SUB_ICON7,
  ];

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {img.map((img, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Link href={img.url}>
              <img alt="" src={img.img} className={classes.imgFluid} />
            </Link>
          </Grid>
        ))}

        <Grid item xs={12} sm={6} md={12} lg={12}>
          {img1.map((img1, i) => (
            <Grid item className={classes.subIcon} key={i}>
              <Link href="/home">
                <img alt="" src={img1} className={classes.imgFluid} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default PageHome
