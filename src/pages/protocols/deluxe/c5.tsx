import React from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "./style";
import Container from "@material-ui/core/Container";

const C5 = () => {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      {/* Tab 6 Start */}
      <Grid container spacing={4}>
        <div style={{
          textAlign: 'center', width: '400px', margin: '0px auto', fontSize: '18px', fontWeight: 'lighter',
          marginTop: '150px',
          color: '#fff', minHeight: '200px',
        }}>{"Remove Tab No. 5"}</div>
      </Grid>
    </Container>
  );
};

export default C5;