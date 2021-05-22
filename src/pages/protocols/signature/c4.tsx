import React from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "./style";
import Container from "@material-ui/core/Container";

const C4 = () => {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="lg">

      {/* Tab 4 Start */}
      <Grid container spacing={4}>
        <Grid item xs={3} sm={3} md={3}></Grid>
        <Grid item xs={6} sm={6} md={6}>
          <div
            className={classes.TreatmentTitle}
            style={{
              color: "#fff",
              padding: "20% 0px",
              textAlign: "center",
              fontWeight: "lighter",
            }}
          >
            Neutralize The Skin While The System Is Cleaning
              </div>
        </Grid>

        <Grid item xs={3} sm={3} md={3}>
          <div id="cstart">START</div>
        </Grid>
      </Grid>
      {/* Tab 4 End */}
    </Container>
  );
};

export default C4;
