import React, { useState, useEffect, Suspense } from "react";
import ml5 from "ml5";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import MostraInfo from "../MostraInfo";
import Typography from "@material-ui/core/Typography";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import Grid from "@material-ui/core/Grid";

let ImageClassifier = (props) => {
  let [classifier, setClassifier] = useState(null);
  let [result, setResult] = useState(null);
  let [phrase, setPhrase] = useState(null);
  let [video] = useState(props.video);

  let classifica = () => {
    if (!classifier) return;
    if (!video) return;

    let v = video.current.video;
    classifier.classify(v).then((res) => {
      console.log(res[0]);
      if (res[0].confidence < 0.7) {
        setPhrase({ label: `We don't know, it could be ${res[0].label}` });
      } else {
        setPhrase({ label: `${res[0].label}` });
      }

      setResult(res[0]);
    });
  };

  let [imageSrc, setSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = video.current.getScreenshot();
    setSrc(imageSrc);
  }, [video]);

  useEffect(() => {
    //let modello = "model.json";
    let modello =
      "https://teachablemachine.withgoogle.com/models/AO7ueBj43/model.json";

    ml5.imageClassifier(modello).then((c) => {
      console.log("caricato");
      setClassifier(c);
    });
  }, []);

  if (!classifier) {
    <Grid container direction="row" justify="center" alignItems="center">
      <Typography>We are downloading the model bro</Typography>
    </Grid>;
  }

  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Button
          variant="contained"
          onClick={() => {
            capture();
            classifica();
          }}
        >
          <CameraAltIcon />
        </Button>
        {result && (
          <Button>
            <CloseIcon
              onClick={() => {
                setResult(null);
              }}
            />
          </Button>
        )}
      </Grid>

      {result ? (
        <>
          <Suspense fallback={<div>Loading</div>}>
            <MostraInfo result={result} phrase={phrase} imageSrc={imageSrc} />
          </Suspense>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
export default ImageClassifier;
