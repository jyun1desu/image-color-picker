import React from "react";
import { useDropzone } from "react-dropzone";
import styles from "./index.module.scss";

interface UploadZoneProperty {
  setImageData: React.Dispatch<React.SetStateAction<string>>;
}
export default function UploadZone(props: UploadZoneProperty) {
  const { setImageData } = props;
  const onDrop = React.useCallback(
    (acceptedFiles) => {
      const image = acceptedFiles[0];
      if (!image) {
        return;
      }
      let reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = () => {
        const imageBase64 = reader.result as string;
        setImageData(imageBase64);
      };
    },
    [setImageData]
  );

  const config = {
    accept: "image/jpeg, image/png, image/jpg, image/bmp",
    onDrop,
    multiple: false,
  };

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone(config);

  const NormalContent = () => (
    <>
      {isDragActive ? (
        "Drop Here ..."
      ) : (
        <>
          <p className={styles.actionText}>{`Drop Your File Here or `}<span>Select It</span></p>
          <span className={styles.accepted}>jpg, jpeg, png, bmp are accepted</span>
        </>
      )}
    </>
  );

  return (
    <div className={styles.uploadArea} {...getRootProps()}>
      <input {...getInputProps()} />
      <div className={styles.uploadCTA}>
        {!isDragReject ? (
          <NormalContent />
        ) : (
          <p>this is not accepted files</p>
        )}
      </div>
    </div>
  );
}
