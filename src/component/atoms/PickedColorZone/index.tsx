import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import styles from "./index.module.scss";

interface CodeAreaProperty {
  type: "HEX" | "RGB";
  value: string;
}

const Palette = () => {
    const empty = true;

    if(empty) {
        return (
            <span className={styles.empty}>
                haven't picked any, start to pick!
            </span>
        )
    }

    return (
        <div className={styles.palette}>
            <span className={styles.color}/>
            <span className={styles.color}/>
            <span className={styles.color}/>
            <span className={styles.color}/>
        </div>
    )
}

const CodeArea = (props: CodeAreaProperty) => {
  const { type, value } = props;
  return (
    <div className={styles.code}>
      <span className={styles.type}>{type}</span>
      <span className={styles.value}>{value}</span>
      <button className={styles.copyButton}>
        <FontAwesomeIcon icon={faCopy} />
      </button>
    </div>
  );
};

const ColorInfo = () => {
    const defaultColor = {
        hex: '#ec7986',
        rgb: 'rgba(236, 121, 134, 1)'
    } 


  return (
    <div className={styles.colorInfo}>
      <div className={styles.color} />
      <div className={styles.info}>
        <CodeArea type="HEX" value={defaultColor.hex.toUpperCase()} />
        <CodeArea type="RGB" value={defaultColor.rgb} />
      </div>
    </div>
  );
};
export default function PickedColorZone() {
  return (
    <div className={styles.pickedColorZone}>
      <span className={styles.title}>Picked Colors</span>
      <ColorInfo />

      <Palette />
    </div>
  );
}
