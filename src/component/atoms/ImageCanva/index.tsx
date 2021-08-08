import React from 'react';
import DefaultImage from 'image/defaultImage.jpg';
import styles from './index.module.scss';

export default function ImageCanva() {
    return (
        <div className={styles.imageZone}>
            <img src={DefaultImage} alt="uploadImage"/>
        </div>
    )
}
