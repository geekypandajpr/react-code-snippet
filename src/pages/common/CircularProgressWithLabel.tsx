import React from "react"
import {
  Box,
  CircularProgress, CircularProgressProps,
  Typography
} from "@material-ui/core"


function CircularProgressWithLabel(props: CircularProgressProps & { value: number }) {
  return (
    <Box position="relative" display="inline-flex" style={{ height: "100px" }} >
      <CircularProgress variant="determinate" {...props} />

      <Typography>{"P"}</Typography>
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textSecondary">
          {Math.round(props.value,)}%
        </Typography>
      </Box>
    </Box>
  )
}

export default CircularProgressWithLabel
