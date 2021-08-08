import React from "react";
import ImageCanva from "component/atoms/ImageCanva";
import CurrentColorZone from "component/atoms/CurrentColorZone";
import PickedColorZone from "component/atoms/PickedColorZone";
import styles from "./index.module.scss";

export default function MainContent() {
  return (
    <div className={styles.main}>
      <ImageCanva />
      <i className="fas fa-badge-check"></i>
      <div className={styles.settings}>
        <CurrentColorZone />
        <PickedColorZone />
      </div>
    </div>
  );
}
