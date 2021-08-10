import React, { useState, useEffect } from "react";
import ImageCanva from "component/atoms/ImageCanva";
import CurrentColorZone from "component/atoms/CurrentColorZone";
import PickedColorZone from "component/atoms/PickedColorZone";
import { RBGColor } from "types";
import styles from "./index.module.scss";

interface MainContentProperty {
  imageData: string;
}
const MainContent = (props: MainContentProperty) => {
  const { imageData } = props;
  const defaultColor = {
    r: 234,
    g: 121,
    b: 134,
    a: 255,
  };
  const [currentColor, setCurrentColor] = useState<RBGColor>(defaultColor);
  const [colorDetail, setColorDetail] = useState<RBGColor>(defaultColor);
  const [pickedColors, updatePickedColors] = useState<RBGColor[]>([]);

  useEffect(() => {
    updatePickedColors([]);
  }, [imageData]);

  const handleRemoveColor = (i: number) => {
    updatePickedColors(pre=>{
      const colors = [...pre];
      colors.splice(i, 1)
      return colors;
    })
  }

  return (
    <div className={styles.main}>
      <ImageCanva
        imageData={imageData}
        onPickColor={() => {
          setColorDetail(currentColor);
          updatePickedColors((pre) => {
            return [...pre, currentColor];
          });
        }}
        setCurrentColor={setCurrentColor}
      />
      <i className="fas fa-badge-check"></i>
      <div className={styles.settings}>
        <CurrentColorZone currentColor={currentColor} />
        <PickedColorZone
          setColorDetail={setColorDetail}
          colorDetail={colorDetail}
          onRemove={handleRemoveColor}
          onClear={() => updatePickedColors([])}
          pickedColors={pickedColors}
        />
      </div>
    </div>
  );
};

export default MainContent;
