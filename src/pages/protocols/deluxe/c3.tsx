import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style";
import Container from "@material-ui/core/Container";
import { IMAGES_URL } from "../../../constants/Images";

const C3 = () => {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      {/* Tab 3 Start */}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={12}>
          <div className={classes.TreatmentTitle}>
            Keravive Scalp HydraFacial™
              </div>
          <div className={classes.TreatmentSubTitle}>
            Extend & Enhance
              </div>
        </Grid>

        <Grid
          item
          xs={12}
          sm={1}
          md={2}
          lg={2}

        >

        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          lg={4}
          id="tSupply"
          className={classes.tSupply}
        >
          <div id="tSupplyTitle">TREATMENT SUPPLIES</div>
          <div id="tSupplyBox1">
            <Typography>
              <img alt="" src={IMAGES_URL.BLANK_ICON} id="tipImage1" />
            </Typography>
            <div id="tSupplytext1">YELLOW TIP</div>
          </div>

          <div id="tSupplyBox1">
            <Typography>
              <img alt="" src={IMAGES_URL.BLANK_ICON} id="tipImage1" />
            </Typography>
            <div id="tSupplytext1">KERAVIVE SPRAY BOTTLE</div>
          </div>

          <div id="tSupplyBox">
            <div id="tSupplytext">

              NO STROKE PATTERN
                </div>
            <div id="tSupplyDevide"></div>
            <div id="tSupplytext">STROKE PATTERN</div>
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          sm={5}
          md={5}
          lg={5}
          id="tTreatment"
          className={classes.tTreatment}
        >
          <div id="tTreatmentTitle">STEP BY STEP TREATMENT</div>

          <div id="tTreatmentBox">
            <img alt="" src={IMAGES_URL.TREATMENT_IMG51} id="tTreatmentimg" />
            <div id="tTreatmentBoxtitle"> STEP 1</div>
          </div>

          <div id="tTreatmentBox">
            <img alt="" src={IMAGES_URL.TREATMENT_IMG52} id="tTreatmentimg" />
            <div id="tTreatmentBoxtitle"> STEP 2</div>
          </div>

          <div id="tTreatmentBox">
            <img alt="" src={IMAGES_URL.TREATMENT_IMG53} id="tTreatmentimg" />
            <div id="tTreatmentBoxtitle"> STEP 3</div>
          </div>

          <div id="tTreatmentBox">
            <img alt="" src={IMAGES_URL.TREATMENT_IMG54} id="tTreatmentimg" />
            <div id="tTreatmentBoxtitle"> STEP 4</div>
          </div>
        </Grid>
      </Grid>
      {/* Tab 3 End */}


    </Container>
  );
};

export default C3
