import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style";
import Container from "@material-ui/core/Container";
import { IMAGES_URL } from "../../../constants/Images";

const C8 = () => {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      {/* Tab 1 Start */}
      {/* Tab 4 Start */}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={12}>
          <div className={classes.TreatmentTitle}>Platinum HydraFacial™</div>
          <div className={classes.TreatmentSubTitle}>LED Lights</div>
        </Grid>



        <Grid
          item
          xs={12}
          sm={5}
          md={6}
          lg={6}
        >

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12} id="video_area"
          >
            <img alt="" src={IMAGES_URL.VICON_MINUS} id="VICON_MINUS" />
            <img alt="" src={IMAGES_URL.VICON_IMG} id="VICON_IMG" />
            <img alt="" src={IMAGES_URL.VICON_PLUS} id="VICON_PLUS" />

          </Grid>

          <div style={{ width: '45%', float: 'left', }}>

            <img alt="" src={IMAGES_URL.VICON_BUTTON1} id="VICON_BUTTON1" />

          </div>

          <div style={{ width: '45%', float: 'right', }}>
            <img alt="" src={IMAGES_URL.VICON_BUTTON2} id="VICON_BUTTON2" />

          </div>


        </Grid>

        <Grid
          item
          xs={12}
          sm={5}
          md={5}
          lg={5}
        >

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            id="tTreatment1"
            className={classes.tTreatment}
          >
            <div id="tTreatmentTitle">STEP BY STEP TREATMENT</div>

            <div id="tTreatmentBox">
              <img alt="" src={IMAGES_URL.TREATMENT_IMG61} id="tTreatmentimg" />
              <div id="tTreatmentBoxtitle"> STEP 1</div>
            </div>

            <div id="tTreatmentBox">
              <img alt="" src={IMAGES_URL.TREATMENT_IMG62} id="tTreatmentimg" />
              <div id="tTreatmentBoxtitle"> STEP 2</div>
            </div>

            <div id="tTreatmentBox">
              <img alt="" src={IMAGES_URL.TREATMENT_IMG63} id="tTreatmentimg" />
              <div id="tTreatmentBoxtitle"> STEP 3</div>
            </div>


          </Grid>


          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            id="tSupply1"
            className={classes.tSupply}
          >
            <div id="tSupplyTitle">TREATMENT SUPPLIES</div>
            <div id="tSupplyBox1">
              <Typography>
                <img alt="" src={IMAGES_URL.TIP_ICON5} id="tipImage1" />
              </Typography>
              <div id="tSupplytext1">RED LED LIGHT</div>
            </div>

            <div id="tSupplyBox1">
              <Typography>
                <img alt="" src={IMAGES_URL.SOLUTION_ICON5} id="tipImage1" />
              </Typography>
              <div id="tSupplytext1">BLUE LED LIGHT</div>
            </div>


          </Grid>


        </Grid>

        {/* Tab 4 End */}
      </Grid>
    </Container>
  );
};

export default C8;
