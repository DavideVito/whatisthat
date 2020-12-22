import React from "react";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useFirestore, useFirestoreDocData } from "reactfire";
import "firebase/firestore";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

let MostraInfo = ({ result, imageSrc, phrase }) => {
  const classes = useStyles();

  let docRef = useFirestore()
    .collection("Castiglion Fiorentino")
    .doc(result.label);

  let { data: documento } = useFirestoreDocData(docRef);

  console.log(documento);

  return (
    <div
      className={classes.root}
      style={{ marginTop: "30px", marginLeft: "10px", marginRight: "10px" }}
    >
      <Grid container direction="row" justify="center" alignItems="flex-start">
        <Grid item xs={12}>
          <Typography variant="h3"> {phrase.label} </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5"></Typography>
        </Grid>

        <div style={{ height: "20px" }}></div>

        <Grid item xs={12}>
          {documento && (
            <Typography variant="h6">{documento.storia}</Typography>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default MostraInfo;
