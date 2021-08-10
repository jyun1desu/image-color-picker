import React from 'react';
import DefaultImage from './defaultImageBase64';
import styles from './index.module.scss';

export default function ImageCanva() {
    return (
        <div className={styles.imageZone}>
            <img src={DefaultImage} alt="uploadImage"/>
        </div>
    )
}
