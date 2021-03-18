import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
  grid: {
    width: 1200,
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)",
    },
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
});

const PageContainer = ({ children, classes }) => (
  <Grid container justify="center">
    <Grid spacing={4} alignItems="center" container className={classes.grid}>
      <Grid item xs={12} md={12}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            {children}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  </Grid>
);

export default withStyles(styles)(PageContainer);
