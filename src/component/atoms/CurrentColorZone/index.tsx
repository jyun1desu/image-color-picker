import React from 'react';
import styles from './index.module.scss';

export default function CurrentColorZone() {
    return (
        <div className={styles.currentColorZone}>
            <span className={styles.title}>Current Color</span>
            <span className={styles.colorBlock}></span>
        </div>
    )
}
