import React from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "./style";
import Container from "@material-ui/core/Container";

const C6 = () => {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <Grid container spacing={4}>
        <div style={{
          textAlign: 'center', width: '400px', margin: '0px auto', fontSize: '18px', fontWeight: 'lighter',
          marginTop: '150px',
          color: '#fff', minHeight: '200px',
        }}>{"Remove Tab No. 6"}</div>
      </Grid>
    </Container>
  );
};

export default C6;