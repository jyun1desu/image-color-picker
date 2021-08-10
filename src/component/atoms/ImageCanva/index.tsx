import React, { useRef, useEffect, useCallback } from "react";
import { useState } from "react";
import { RBGColor } from "types";
import styles from "./index.module.scss";

interface ImageCanvaProperty {
  imageData: string;
  onPickColor: () => void;
  setCurrentColor: React.Dispatch<React.SetStateAction<RBGColor>>;
}
const ImageCanva = (props: ImageCanvaProperty) => {
  const { imageData, setCurrentColor, onPickColor } = props;
  const refCanva = useRef<HTMLCanvasElement>(null);
  const refImage = useRef<HTMLImageElement>(null);
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  } | null>(null);


  const creatCanvaContext = useCallback((
    canvaElement: HTMLCanvasElement,
    imageElement: HTMLImageElement
  ) => {
    canvaElement.width = imageElement.width;
    canvaElement.height = imageElement.height;
    const ctx = canvaElement.getContext("2d");
    ctx!.drawImage(
      imageElement,
      0,
      0,
      imageElement.width,
      imageElement.height
    );
  },[]);

  useEffect(() => {
      const creatCanva = () => {
        creatCanvaContext(refCanva.current!, refImage.current!);
      }
      window.addEventListener("resize", creatCanva);
      return () => window.removeEventListener("resize", creatCanva);
  }, [creatCanvaContext])

  useEffect(() => {
    creatCanvaContext(refCanva.current!, refImage.current!);
  }, [refImage, imageData, creatCanvaContext]);

  const getCurrentColor = useCallback(
    (position: { x: number; y: number }) => {
      const { x, y } = position;
      const ctx = refCanva.current!.getContext("2d");
      const colorData = ctx!.getImageData(x, y, 1, 1).data;
      const rgbData = {
        r: colorData[0],
        g: colorData[1],
        b: colorData[2],
        a: colorData[3],
      };
      return rgbData;
    },
    [refCanva]
  );

  useEffect(() => {
    if (mousePosition) {
      setCurrentColor(getCurrentColor(mousePosition));
    }
  }, [mousePosition, getCurrentColor, setCurrentColor]);

  return (
    <div className={styles.imageZone}>
      <img
        onClick={onPickColor}
        onMouseMove={(e) =>
          setMousePosition({
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY,
          })
        }
        ref={refImage}
        src={imageData}
        alt="uploadImage"
      />
      <canvas
        style={{
          display: "none",
        }}
        onMouseMove={(e) =>
          setMousePosition({
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY,
          })
        }
        ref={refCanva}
      />
    </div>
  );
};

export default ImageCanva;
