import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
const TextSignature = (props) => {
  const {className, name, getImage, x, y, height = 68, font = '30px Arial', defaultImg = ''} = props;
  const [imgBase64, setImgBase64] = useState(defaultImg);
  const generateBase64Img = (img) => {
    setImgBase64(img)
    getImage(img)
  }
  useEffect(() => {
    let canvasTxt = document.getElementById("canvasComponent").getContext("2d");
    canvasTxt.canvas.width = canvasTxt.measureText(name).width;
    canvasTxt.canvas.height = height;
    canvasTxt.font = font
    canvasTxt.fillText(name, x, y);
    generateBase64Img(canvasTxt.canvas.toDataURL())
  });

  return(
    <div className={className}>
      <canvas id="canvasComponent" />
      {imgBase64.length > 0 ?
        <img id="imageComponent" src={imgBase64}  alt=""/>
        : null}
    </div>
  )
}
TextSignature.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  getImage: PropTypes.func.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  font: PropTypes.string.isRequired,
  defaultImg: PropTypes.string
};
export default TextSignature;