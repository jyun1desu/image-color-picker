import React from "react";
import styles from "./index.module.scss";

export default function UploadZone() {
  return (
    <div className={styles.uploadArea}>
      <p className={styles.uploadCTA}>
        {`Drop Your File Here or `}
        <span>Select It</span>
      </p>
    </div>
  );
}
