import React from "react";
import Webcam from "react-webcam";
import ImageClassifier from "../ImageClassifier";

const Camera = () => {
  const webcamRef = React.useRef(null);

  const videoConstraints = {
    facingMode: { exact: "environment" },
    //facingMode: "user",
  };

  return (
    <>
      <Webcam
        ref={webcamRef}
        style={{ width: "100%" }}
        audio={false}
        onClick={() => {
          return;
        }}
        videoConstraints={videoConstraints}
        mirrored={false}
      />

      <ImageClassifier video={webcamRef} />
    </>
  );
};

export default Camera;
