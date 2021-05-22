import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style";
import Container from "@material-ui/core/Container";
import { IMAGES_URL } from "../../../constants/Images";

const C1 = () => {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      {/* Tab 1 Start */}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={12}>
          <div className={classes.TreatmentTitle}>
            Signature HydraFacial™
              </div>
          <div className={classes.TreatmentSubTitle}>
            Exfoliation
              </div>
        </Grid>

        <Grid
          item
          xs={12}
          sm={1}
          md={2}
          lg={2}
          id="tSetting"
          className={classes.tSetting}
        >
          <div id="tSettingTitle">
            VACUUM <br></br>
                SETTINGS
              </div>
          <Typography>
            <img alt=""
              src={IMAGES_URL.POWER_ICON}
              style={{ width: "60px", margin: "10px auto" }}
            />
          </Typography>
          <Typography>
            <img alt=""
              src={IMAGES_URL.PLUS_ICON}
              style={{ width: "60px", margin: "10px auto", clear: "both" }}
            />
          </Typography>

          <div id="tSettingCounting">21</div>
          <Typography>
            <img alt=""
              src={IMAGES_URL.MINUS_ICON}
              style={{ width: "60px", margin: "10px auto", clear: "both" }}
            />
          </Typography>
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
              <img alt="" src={IMAGES_URL.TIP_ICON1} id="tipImage1" />
            </Typography>
            <div id="tSupplytext1">LARGE BLUE TIP</div>
          </div>

          <div id="tSupplyBox1">
            <Typography>
              <img alt="" src={IMAGES_URL.SOLUTION_ICON1} id="tipImage1" />
            </Typography>
            <div id="tSupplytext1">Activ-4 </div>
          </div>

          <div id="tSupplyBox">
            <div id="tSupplytext">
              <img alt=""
                src={IMAGES_URL.STROKE_ICON1}
                style={{
                  float: "left",
                  width: "50px",
                  marginRight: "10px",
                  marginTop: "6px",
                }}
              />{" "}
                  LONG, FAST, OVERLAPPING STROKES
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
            <img alt="" src={IMAGES_URL.TREATMENT_IMG11} id="tTreatmentimg" />
            <div id="tTreatmentBoxtitle"> STEP 1</div>
          </div>

          <div id="tTreatmentBox">
            <img alt="" src={IMAGES_URL.TREATMENT_IMG12} id="tTreatmentimg" />
            <div id="tTreatmentBoxtitle"> STEP 2</div>
          </div>

          <div id="tTreatmentBox">
            <img alt="" src={IMAGES_URL.TREATMENT_IMG13} id="tTreatmentimg" />
            <div id="tTreatmentBoxtitle"> STEP 3</div>
          </div>

          <div id="tTreatmentBox">
            <img alt="" src={IMAGES_URL.TREATMENT_IMG14} id="tTreatmentimg" />
            <div id="tTreatmentBoxtitle"> STEP 4</div>
          </div>
        </Grid>
      </Grid>


      {/* Tab 1 End */}

      {/* Tab 5 End */}
    </Container>
  );
};

export default C1;
