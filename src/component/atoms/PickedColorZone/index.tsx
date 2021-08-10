import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { RBGColor } from "types";
import styles from "./index.module.scss";


const rgbToHex = (color: { r: number; g: number; b: number }) => {
  const { r, g, b } = color;
  let red = r.toString(16);
  let green = g.toString(16);
  let blue = b.toString(16);
  
  if (red.length === 1) red = "0" + red;
  if (green.length === 1) green = "0" + green;
  if (blue.length === 1) blue = "0" + blue;
  
  return `#${red}${green}${blue}`.toUpperCase();
};

const colorDataToRGB = (color: RBGColor) => {
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
};

interface PaletteProperty {
  colors: RBGColor[];
  onClear: () => void;
  onRemove: (i: number) => void;
  setColorDetail: React.Dispatch<React.SetStateAction<RBGColor>>;
}

const Palette = (props: PaletteProperty) => {
  const { colors, onClear, setColorDetail, onRemove } = props;
  
  if (!colors.length) {
    return (
      <span className={styles.empty}>haven't picked any, start to pick!</span>
      );
    }
    
    return (
      <div className={styles.paletteZone}>
      <div className={styles.palette}>
        {colors.map((c, i) => {
          return (
            <span
            onDoubleClick={()=>{onRemove(i)}}
            onClick={() => setColorDetail(c)}
            key={`color${i}`}
            style={{ backgroundColor: colorDataToRGB(c) }}
            className={styles.color}
            />
            );
          })}
      </div>
      <div className={styles.bottom}>
      <span className={styles.hint}>double click to remove the color</span>
      <span onClick={onClear} className={styles.clear}>clear all</span>
      </div>
    </div>
  );
};

interface CodeAreaProperty {
  type: "HEX" | "RGB";
  value: string;
}
const CodeArea = (props: CodeAreaProperty) => {
  const { type, value } = props;

  const copyCode = (value: string) => {
    navigator.clipboard.writeText(value)
    /**
     * todo: some ui
     * .then(async () => {})
     */
}

  return (
    <div className={styles.code}>
      <span className={styles.type}>{type}</span>
      <span className={styles.value}>{value}</span>
      <button onClick={()=>copyCode(value)} className={styles.copyButton}>
        <FontAwesomeIcon icon={faCopy} />
      </button>
    </div>
  );
};

interface ColorInfoProperty {
  color: RBGColor;
}

const ColorInfo = (props: ColorInfoProperty) => {
  const defaultColor = { r: 236, g: 121, b: 134, a: 1 };
  const color = props.color || defaultColor;

  return (
    <div className={styles.colorInfo}>
      <div
        style={{ backgroundColor: colorDataToRGB(color) }}
        className={styles.color}
      />
      <div className={styles.info}>
        <CodeArea type="HEX" value={rgbToHex(color)} />
        <CodeArea type="RGB" value={colorDataToRGB(color)} />
      </div>
    </div>
  );
};

interface PickedColorZoneProperty {
  colorDetail: RBGColor;
  setColorDetail: React.Dispatch<React.SetStateAction<RBGColor>>;
  pickedColors: RBGColor[];
  onClear: () => void;
  onRemove: (i: number) => void;
}
const PickedColorZone = (props: PickedColorZoneProperty) => {
  const { pickedColors, colorDetail, setColorDetail, onClear, onRemove } = props;
  return (
    <div className={styles.pickedColorZone}>
      <span className={styles.title}>Picked Colors</span>
      <ColorInfo color={colorDetail} />
      <Palette
        setColorDetail={setColorDetail}
        colors={pickedColors}
        onClear={onClear}
        onRemove={onRemove}
      />
    </div>
  );
};

export default PickedColorZone;
