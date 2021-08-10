import React from "react";
import { useDropzone } from "react-dropzone";
import useImage64 from "model/useImage64";
import styles from "./index.module.scss";

export default function UploadZone() {
  // const { setImage } = useImage64();
  const onDrop = React.useCallback((acceptedFiles) => {
    const image = acceptedFiles[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      const imageBase64 = reader.result as string;
      console.log(imageBase64)
    };

  }, []);

  const config = {
    accept: 'image/jpeg, image/png, image/jpg',
    onDrop, 
    multiple: false
  }

  const { getRootProps, getInputProps } = useDropzone(config);

  return (
    <div className={styles.uploadArea} {...getRootProps()}>
      <input {...getInputProps()} />
      <p className={styles.uploadCTA}>
        {`Drop Your File Here or `}
        <span>Select It</span>
      </p>
    </div>
  );
}
