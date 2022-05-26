import React from "react";
import "./App.css";

import Cropper from "react-easy-crop";
import Slider from "@material-ui/core/Slider";

export default function App() {
  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);

  const customStyle = {
    containerStyle: {
      width: "70%",
      height: "100%",
      
    },
    mediaStyle: {
      left: "-50%",
    },
    cropAreaStyle: {
      "background-image":
        "url('https://mhs-dev-public.s3.amazonaws.com/static/assets/image/grid-center.png'), url('https://mhs-dev-public.s3.amazonaws.com/static/assets/image/Grid-green.png')",
      "background-size": "100% 100%",
      "background-repeat": "no-repeat",
      "left": "20%",
    },
  };

  return (
    <div className="outer-container">
      <div className="cropper">
        <Cropper
          image={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
          }
          crop={crop}
          zoom={zoom}
          aspect={46 / 100}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          showGrid={false}
          style={customStyle}
        />
      </div>
      <div className="slider">
        <Slider
          min={1}
          max={10}
          step={0.1}
          value={zoom}
          onChange={(e, zoom) => setZoom(zoom)}
        />
      </div>
    </div>
  );
}
