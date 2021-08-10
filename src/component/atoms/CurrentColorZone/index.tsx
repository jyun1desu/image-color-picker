import React from "react";
import { RBGColor } from "types";
import styles from "./index.module.scss";

interface CurrentColorZoneProperty {
  currentColor: RBGColor;
}
const CurrentColorZone = (props: CurrentColorZoneProperty) => {
  const { currentColor } = props;
  return (
    <div className={styles.currentColorZone}>
      <span className={styles.title}>Current Color</span>
      <span
        style={{
          backgroundColor: `rgba(${currentColor.r}, ${currentColor.g},${currentColor.b}, ${currentColor.a})`,
        }}
        className={styles.colorBlock}
      ></span>
    </div>
  );
};

export default CurrentColorZone;
