import React from "react";
import Vacuum from "../Vacuum";
import SerumSelection from "../SerumSelection";
import SerumFlow from "../SerumFlow";
import Temperature from "../Temperature";
import Fan from "../Fan";
import Vortex from "../Vortex";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px 20px',
    justifyContent: 'center',
    padding: 30,
    '& > div': {
      padding: 20,
      borderRadius: 8,
      boxShadow: '0 0 10px 1px rgba(0,0,0, 0.2)',
    }
  }
})

const ConsoleDashboard = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Vacuum />
      <SerumSelection />
      <SerumFlow />

      <Temperature />
      <Fan />
      <Vortex />
    </div>
  );
};

export default ConsoleDashboard
